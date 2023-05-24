import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {useEffect, useState} from 'react';
// import CountDown from 'react-native-countdown-component';
const dummyData = [
  {
    id: 1,
    source: require('./Assets/two.png'),
  },
  {
    id: 2,
    source: require('./Assets/one.png'),
  },
  {
    id: 3,
    source: require('./Assets/one.png'),
  },
];

const App = () => {
  const [Months, setMonths] = useState(78);
  const [hours, sethours] = useState(16);
  const [mins, setmins] = useState(50);
  const [sec, setsec] = useState(99);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMonths(Months - 1);
    }, 86400000);

    return () => clearTimeout(timer);
  }, [Months]);

  useEffect(() => {
    const timerofsec = setTimeout(() => {
      if (sec > 0 ) {
        setsec(sec - 1);
      }
      
    }, 1000);
  }, [sec]);

  useEffect(() => {
    const timerh = setTimeout(() => {
      sethours(hours - 1);
    }, 3600000);

    return () => clearTimeout(timerh);
  }, [hours]);

  useEffect(() => {
    const timerofmin = setTimeout(() => {
      setmins(mins - 1);
    }, 6000);

    return () => clearTimeout(timerofmin);
  }, [mins]);

  return (
    <View style={style.mainView}>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={dummyData}
        renderItem={({item, index}) => {
          return (
            <View style={style.cardOutside}>
              <Image
                source={item.source}
                style={style.ImageBackgroundset}></Image>
              <View style={style.countdown}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <Text style={style.counttext1}> {Months}</Text>
                  <Text style={style.counttext1}> {hours}</Text>
                  <Text style={style.counttext1}> {mins}</Text>
                  <Text style={style.counttext1}> {sec}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <Text style={style.counttext}> Days</Text>
                  <Text style={style.counttext}> Hours</Text>
                  <Text style={style.counttext}> Mins</Text>
                  <Text style={style.counttext}> Sec</Text>
                </View>

                {/* <CountDown
                  until={63663}
                  digitStyle={{backgroundColor: '#FFF'}}
                  digitTxtStyle={{color: 'black'}}
                  size={25}
                /> */}
                <View style={style.lowersegmat}>
                  <Image
                    source={require('./Assets/smallbar.png')}
                    style={{height: 50, width: 50}}
                  />
                  <Text style={style.lowersegmanttext}>25,000,000 GBP</Text>
                  <Text style={style.lowersegmanttext}> Sotheby's</Text>
                </View>
                <View style={style.area}>
                  <Text style={style.Address}>
                    SHELTON STREET COVENT GARDEN...
                  </Text>
                  <Text style={style.Addresscode}>#ZM124AYYYW</Text>
                </View>
              </View>
              <View style={style.bottomView}>
                <View style={style.bottomcontent}>
                  <Text style={style.textbottom}>25,000 GBP</Text>
                  <TouchableOpacity>
                    <Text style={style.textbottom}> BUY ENTRY NOW</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}></FlatList>
    </View>
  );
};

export default App;

const style = ScaledSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
  },
  cardOutside: {
    height: '431.25@vs',
    width: '320@s',

    alignSelf: 'center',
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
    margin: 15,
  },
  bottomView: {
    height: '66@vs',
    width: '320@s',
    backgroundColor: 'black',
    alignSelf: 'center',
    marginTop: 30,
    borderBottomStartRadius: 35,
    borderBottomEndRadius: 35,
  },
  ImageBackgroundset: {
    flex: 1,
    position: 'absolute',
  },
  countdown: {
    marginTop: 80,
  },
  bottomcontent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textbottom: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    padding: 20,
  },

  lowersegmat: {
    flexDirection: 'row',
    marginTop: 100,

    justifyContent: 'space-between',
  },
  lowersegmanttext: {
    fontSize: 25,
    fontWeight: '500',
    color: 'white',
  },
  Address: {
    fontSize: 20,
    fontWeight: '300',
    color: 'white',
  },
  area: {
    marginLeft: 30,
    marginTop: 8,
  },
  Addresscode: {
    fontSize: 20,
    fontWeight: '300',
    color: 'white',
    marginLeft: 190,
  },
  counttext: {
    fontSize: 15,
    color: 'white',
    marginLeft: 20,
    fontWeight: '500',
  },
  counttext1: {
    fontSize: 35,
    color: 'white',
    marginLeft: 10,

    fontWeight: '400',
  },
});
