import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useQuery } from 'react-query';

import { Loader, MediaListHorizon } from '@components/index';
import { movieAPI, tvAPI } from '@utils/api';
import styled from 'styled-components/native';

const Search = () => {
  const [input, setInput] = useState('');

  const {
    isLoading: movieLoading,
    data: movieData,
    refetch: movieRefetch,
  } = useQuery(['searchMovie', input], movieAPI.search, { enabled: false });

  const {
    isLoading: tvLoading,
    data: tvData,
    refetch: tvRefetch,
  } = useQuery(['searchTV', input], tvAPI.search, { enabled: false });

  const onChangeText = (text: string) => setInput(text);
  const onSubmit = () => {
    if (input) {
      movieRefetch();
      tvRefetch();
    }
  };

  return (
    <ScrollView>
      <SearchBar
        placeholder='Search for Movie or TV show'
        placeholderTextColor='grey'
        returnKeyType='search'
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
      />
      {(movieLoading || tvLoading) && <Loader />}
      {movieData && <MediaListHorizon title='Movie Results' data={movieData.results} />}
      {tvData && <MediaListHorizon title='TV Results' data={tvData.results} />}
    </ScrollView>
  );
};

const SearchBar = styled.TextInput`
  width: 90%;
  margin: 15px auto;
  border-radius: 18px;
  background-color: #fff;
  padding: 10px 15px;
`;

export default Search;
