import React, {useEffect, useState, useContext} from 'react';
import {View} from 'react-native';
import {MovieContext} from '../context/MovieContext';
import FilmButton from './FilmButton';
import ProgressStatus from './ProgressStatus';
import StatusLoading from './StatusLoading';
import Title from './Title';

let interval;
export default function ProgressBar() {
  const [running, setRunning] = useState(true);
  const [progress, setProgress] = useState(0);
  const {file, setFile, setLoading, loading} = useContext(MovieContext);

  const type = file.type.split('/')[0];

  useEffect(() => {
    if (running) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress(prev => prev + 5);
      }, 200);
    } else {
      clearInterval(interval);
    }
  }, [running]);

  useEffect(() => {
    if (progress === 100) {
      setLoading(false);
      setRunning(false);
      clearInterval(interval);
    }
  }, [progress]);

  return (
    <View>
      {type === 'image' ? (
        <>
          {progress < 100 ? (
            <>
              <StatusLoading title="Cargando" progress={progress} />
              <ProgressStatus progress={progress} color="#64EEBC" />
              <FilmButton
                title="Cancelar"
                top={20}
                align="flex-end"
                onPress={() => {
                  setRunning(false);
                  setProgress(0);
                  setFile(null);
                }}
              />
            </>
          ) : (
            <>
              <Title title="100% Cargado" down={20} />
              <ProgressStatus progress={progress} color="#64EEBC" />
              <Title
                title="¡Listo!"
                top={20}
                color="#64EEBC"
                align="flex-end"
              />
            </>
          )}
        </>
      ) : (
        <>
          {progress < 100 ? (
            <>
              <StatusLoading title="Cargando" progress={progress} />
              <ProgressStatus progress={progress} color="#64EEBC" />
              <FilmButton
                title="Cancelar"
                top={20}
                align="flex-end"
                onPress={() => {
                  setRunning(false);
                  setProgress(0);
                  setFile(null);
                }}
              />
            </>
          ) : (
            <>
              <Title
                title="¡Error no se pudo cargar la pelicula"
                down={20}
                spacing={3}
              />
              <ProgressStatus
                progress={progress}
                color={progress === 100 ? 'red' : '#64EEBC'}
              />
              <FilmButton
                title="Reintentar"
                top={20}
                align="flex-end"
                onPress={() => {
                  setRunning(false);
                  setProgress(0);
                  setFile(null);
                }}
              />
            </>
          )}
        </>
      )}
    </View>
  );
}
