import axios from 'axios';
import { useSearch } from 'context/SearchContext';
import useFetch from 'hooks/useFetch';
import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './Reserve.css';

export default function Reserve({ openModal, setOpenModal, hotelId }) {
  const { data } = useFetch(`/hotels/hotelsRooms/${hotelId}`);
  const { dates } = useSearch();
  const [selectedRooms, setSelectedRooms] = useState([]);

  useEffect(() => {
    const body = document.querySelector('body');
    window.scrollTo(0, 0);
    body.style.overflow = openModal ? 'hidden' : 'auto';
  }, [openModal]);

  const handleSelect = e => {
    const checked = e.target.checked;
    const roomId = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, roomId]
        : selectedRooms.filter(room => room !== roomId)
    );
  };

  const getDatesInRange = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const dates = [];

    let currentDate = new Date(startDate.getTime());

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate).getTime());
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = roomNumber => {
    const isFound = roomNumber.unavailableDates.some(date =>
      allDates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  const handleReserveClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map(async roomNumber => {
          const response = axios.put(`/rooms/availability/${roomNumber}`, {
            availability: allDates.map(date => date.toISOString())
          });
          return response.data;
        })
      );
    } catch (error) {
      alert('Something went wrong');
    }
  };

  return (
    <div className='reserve'>
      <div className='rContainer'>
        <div className='rClose'>
          <button onClick={() => setOpenModal(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <div className='rInner'>
          <div className='rSlogan'>Select your rooms:</div>
          <div className='form'>
            {data.map(item => (
              <div key={item.title} className='rRooms'>
                <div className='rTitle'>{item.title}</div>
                <div className='rInpt'>
                  <div className='rTextContainer'>
                    <div className='rText'>{item.description}</div>
                    <div className='rMax'>
                      Max people : <strong>{item.maxPeople}</strong>
                    </div>
                  </div>
                  <div className='rInputContainer'>
                    {item.roomNumbers.map(roomNumber => (
                      <div key={roomNumber.number} className='rInput'>
                        <p>{roomNumber.number}</p>
                        <input
                          type='checkbox'
                          value={roomNumber._id}
                          onChange={handleSelect}
                          disabled={!isAvailable(roomNumber)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className='rPrice'>${item.price}</div>
              </div>
            ))}
          </div>
          <button onClick={handleReserveClick}>Reserve</button>
        </div>
      </div>
    </div>
  );
}
