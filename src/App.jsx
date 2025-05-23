import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import PageHeader from './components/PageHeader/PageHeader';
import Section from './components/Section/Section';
import Container from './components/Container/Container';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchPictures } from './unsplash-api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Modal from 'react-modal';

function App() {
  Modal.setAppElement('#root');

  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = input => {
    setSearchQuery(input);
    setCurrentPage(1);
    setSearchResult([]);
  };

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (searchQuery.trim() === '') {
      return;
    }

    async function fetchData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const newPictures = await fetchPictures(searchQuery, currentPage);
        setSearchResult(prevPictures => [...prevPictures, ...newPictures]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [currentPage, searchQuery]);

  return (
    <>
      <Section>
        <Container>
          <PageHeader task={'Picture Search'}>Homework #4</PageHeader>
          <SearchBar onSubmit={handleSearch} />
        </Container>
      </Section>
      <Section>
        <Container>
          {searchResult.length > 0 && !isError && <ImageGallery picturesArray={searchResult} />}
          {isError && <strong>Something went wrong... Please try again later.</strong>}
          <Loader isLoading={isLoading} />
          {searchResult.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
        </Container>
      </Section>
    </>
  );
}

export default App;
