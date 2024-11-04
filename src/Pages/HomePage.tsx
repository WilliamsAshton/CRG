import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JSONTable from '../Components/JSONTable';
import SearchBar from '../Components/SearchBar';
import ItemModal from '../Components/ItemModal';
import styles from '../CSS/HomePage.module.css';

const HomePage: React.FC = () => {
  const [bodyData, setBodyData] = useState([]);
  const [timelineData, setTimelineData] = useState([]);
  const [filteredTimelineData, setFilteredTimelineData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRow, setSelectedRow] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://arthurfrost.qflo.co.za/php/getTimeline.php')
      .then(response => {
        setBodyData(response.data.Body);
        setTimelineData(response.data.Timeline);
        setFilteredTimelineData(response.data.Timeline);
      })
      .catch(error => setError(error));
  }, []);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setFilteredTimelineData(
      timelineData.filter(item =>
        item.Title.toLowerCase().includes(value) ||
        item.Episode.includes(value) ||
        item.MediaName.toLowerCase().includes(value) ||
        item.CreateDate.includes(value) ||
        item.Category.toLowerCase().includes(value)
      )
    );
  };

  const handleRowDoubleClick = (item: any) => {
    setSelectedRow(item);
    setShowModal(true);
  };

  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className={styles.appContainer}>
      <div className={styles.bodyData}>
        {bodyData.map(item => (
          <div key={item.Id} className={styles.bodyItem}>
            <div
              className={styles.backgroundSection}
              style={{
                backgroundImage: `url(https://arthurfrost.qflo.co.za/${item.Background})`,
                opacity: item.BackgroundOpacity / 100,
              }}
            />
            <div className={styles.aboutSection}>
              <div dangerouslySetInnerHTML={{ __html: item.About }} />
            </div>
          </div>
        ))}
      </div>
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <JSONTable data={filteredTimelineData} onRowDoubleClick={handleRowDoubleClick} />
      <ItemModal show={showModal} onClose={() => setShowModal(false)} item={selectedRow} />
    </div>
  );
};

export default HomePage;