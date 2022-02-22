import React, {useEffect, useState, useContext} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {MovieContext} from '../context/MovieContext';

let interval;
export default function ProgressBar() {
  const [running, setRunning] = useState(true);
  const [progress, setProgress] = useState(0);
  const {file, setFile} = useContext(MovieContext);

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
      setRunning(false);
      clearInterval(interval);
    }
  }, [progress]);

  return (
    <View>
      {progress < 100 ? (
        <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'BebasNeue-Regular',
              color: 'white',
              letterSpacing: 5,
              marginRight: 10,
            }}>
            Cargando
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'BebasNeue-Regular',
              color: 'white',
              letterSpacing: 5,
            }}>
            {progress} %
          </Text>
        </View>
      ) : (
        <View style={{marginBottom: 20}}>
          {type === 'image' ? (
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'BebasNeue-Regular',
                color: 'white',
                letterSpacing: 5,
                marginRight: 10,
              }}>
              100% cargado
            </Text>
          ) : (
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'BebasNeue-Regular',
                color: 'white',
                letterSpacing: 3,
                marginRight: 10,
              }}>
              ¡ERROR! no se pudo cargar la película
            </Text>
          )}
        </View>
      )}

      <View
        style={{
          backgroundColor: '#e4e4e4',
          width: '100%',
          height: 10,
          borderRadius: 5,
        }}>
        {progress === 100 ? (
          type === 'image' ? (
            <View
              style={{
                backgroundColor: '#64EEBC',
                height: 10,
                borderRadius: 5,
                width: `${progress}%`,
              }}
            />
          ) : (
            <View
              style={{
                backgroundColor: 'red',
                height: 10,
                borderRadius: 5,
                width: `${progress}%`,
              }}
            />
          )
        ) : (
          <View
            style={{
              backgroundColor: '#64EEBC',
              height: 10,
              borderRadius: 5,
              width: `${progress}%`,
            }}
          />
        )}
      </View>
      <View
        style={{
          marginTop: 20,
          width: '100%',

          alignItems: 'flex-end',
        }}>
        {progress < 100 ? (
          <TouchableOpacity
            onPress={() => {
              setRunning(false);
              setProgress(0);
              setFile(null);
            }}>
            <Text
              style={{
                fontFamily: 'BebasNeue-Regular',
                fontSize: 20,
                letterSpacing: 3,
                color: 'white',
              }}>
              Cancelar
            </Text>
          </TouchableOpacity>
        ) : type === 'image' ? (
          <Text
            style={{
              fontFamily: 'BebasNeue-Regular',
              fontSize: 20,
              letterSpacing: 5,
              color: '#64EEBC',
            }}>
            ¡Listo!
          </Text>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setRunning(false);
              setProgress(0);
              setFile(null);
            }}>
            <Text
              style={{
                fontFamily: 'BebasNeue-Regular',
                fontSize: 20,
                letterSpacing: 3,
                color: 'white',
              }}>
              Reintentar
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {/* <View style={{marginBottom: 60}} /> */}
      <TouchableOpacity
        onPress={() => {
          setFile(null);
        }}>
        <Text
          style={{
            fontFamily: 'BebasNeue-Regular',
            fontSize: 20,
            letterSpacing: 3,
            color: 'white',
          }}>
          Clear file
        </Text>
      </TouchableOpacity>
    </View>
  );
}
