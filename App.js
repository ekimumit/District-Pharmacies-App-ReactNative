import React, { useState } from 'react';

import { StyleSheet, Text, View, FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';



const countries = ["Yalova", "Edirne", "Kocaeli", "Istanbul"];
const county = ["Yalova", "Edirne", "Kocaeli", "Istanbul"];




export default function App() {

async function axioseczanedata(city, county) {
  let tempData = [];
  await axios.get('https://www.nosyapi.com/apiv2/pharmacyLink?city=' + city + '&county=' + county + '&apikey=vLWlOpfQKRVLcVZxqo5Vg5CbXNtZ2HigQgdvDeRfGBOxaQoxFWvIrYPcSepS')
  .then(res => {
          tempData = res.data; 
  });
  setEczaneList(tempData);




}


  async function countyData(value) {
    let dummmyData=[];
    const response = await axios.get('https://www.nosyapi.com/apiv2/pharmacy/city', {
      params: {
        'city': value
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer vLWlOpfQKRVLcVZxqo5Vg5CbXNtZ2HigQgdvDeRfGBOxaQoxFWvIrYPcSepS'
      }
    }).then((res)=>res.data);

    response.data.map((item,
      index) => {
      const
          temp = {
              label:
                  item.ilceAd,
              value:
                  item.ilceSlug,
          };
      dummmyData.push(temp);
  });
  setItems2(dummmyData);


  };


  const [eczaneList,setEczaneList] = useState([]);


  const [items, setItems] = useState([
    { label: 'Adana', value: 'adana' },
    { label: 'Adıyaman', value: 'adiyaman' },
    { label: 'Afyonkarahisar', value: 'afyonkarahisar' },
    { label: 'Ağrı', value: 'agri' },
    { label: 'Aksaray', value: 'aksaray' },
    { label: 'Amasya', value: 'amasya' },
    { label: 'Ankara', value: 'ankara' },
    { label: 'Antalya', value: 'antalya' },
    { label: 'Ardahan', value: 'ardahan' },
    { label: 'Artvin', value: 'artvin' },
    { label: 'Balıkesir', value: 'balikesir' },
    { label: 'Bartın', value: 'bartin' },
    { label: 'Batman', value: 'batman' },
    { label: 'Bayburt', value: 'bayburt' },
    { label: 'Bilecik', value: 'bilecik' },
    { label: 'Bingöl', value: 'bingol' },
    { label: 'Bitlis', value: 'bitlis' },
    { label: 'Bolu', value: 'bolu' },
    { label: 'Çanakkale', value: 'canakkale' },
    { label: 'Çankırı', value: 'cankiri' },
    { label: 'Çorum', value: 'corum' },
    { label: 'Denizli', value: 'denizli' },
    { label: 'Diyarbakır', value: 'diyarbakir' },
    { label: 'Düzce', value: 'duzce' },
    { label: 'Edirne', value: 'edirne' },
    { label: 'Elazığ', value: 'elazig' },
    { label: 'Erzincan', value: 'erzincan' },
    { label: 'Erzurum', value: 'erzurum' },
    { label: 'Eskişehir', value: 'eskisehir' },
    { label: 'Gaziantep', value: 'gaziantep' },
    { label: 'Giresun', value: 'giresun' },
    { label: 'Gümüşhane', value: 'gumushane' },
    { label: 'Hakkari', value: 'hakkari' },
    { label: 'Hatay', value: 'hatay' },
    { label: 'Iğdır', value: 'igdir' },
    { label: 'Isparta', value: 'isparta' },
    { label: 'İstanbul', value: 'istanbul' },
    { label: 'İzmir', value: 'izmir' },
    { label: 'Kahramanmaraş', value: 'kahramanmaras' },
    { label: 'Karabük', value: 'karabuk' },
    { label: 'Karaman', value: 'karaman' },
    { label: 'Kars', value: 'kars' },
    { label: 'Kastamonu', value: 'kastamonu' },
    { label: 'Kayseri', value: 'kayseri' },
    { label: 'Kilis', value: 'kilis' },
    { label: 'Kırıkkale', value: 'kirikkale' },
    { label: 'Kırklareli', value: 'kirklareli' },
    { label: 'Kırşehir', value: 'kirsehir' },
    { label: 'Kocaeli', value: 'kocaeli' },
    { label: 'Kütahya', value: 'kutahya' },
    { label: 'Malatya', value: 'malatya' },
    { label: 'Manisa', value: 'manisa' },
    { label: 'Mardin', value: 'mardin' },
    { label: 'Mersin', value: 'mersin' },
    { label: 'Muğla', value: 'mugla' },
    { label: 'Muş', value: 'mus' },
    { label: 'Nevşehir', value: 'nevsehir' },
    { label: 'Niğde', value: 'nigde' },
    { label: 'Ordu', value: 'ordu' },
    { label: 'Osmaniye', value: 'osmaniye' },
    { label: 'Rize', value: 'rize' },
    { label: 'Sakarya', value: 'sakarya' },
    { label: 'Samsun', value: 'samsun' },
    { label: 'Şanlıurfa', value: 'sanliurfa' },
    { label: 'Siirt', value: 'siirt' },
    { label: 'Sinop', value: 'sinop' },
    { label: 'Sivas', value: 'sivas' },
    { label: 'Şırnak', value: 'sirnak' },
    { label: 'Tekirdağ', value: 'tekirdag' },
    { label: 'Tokat', value: 'tokat' },
    { label: 'Trabzon', value: 'trabzon' },
    { label: 'Tunceli', value: 'tunceli' },
    { label: 'Uşak', value: 'usak' },
    { label: 'Van', value: 'van' },
    { label: 'Yalova', value: 'yalova' },
    { label: 'Yozgat', value: 'yozgat' },
    { label: 'Zonguldak', value: 'zonguldak' }
  ]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
  ]);
  const EczaneItem = (data) => {
    console.log("-----------GelenDATA------------");
    console.log(data);
    console.log("-----------GelenDATA------------");
    return (
      <View style={styles.row3Border}>
        <Text style={styles.districtNameText}>Eczane adi: {data.EczaneAdi}</Text>
        <Text style={styles.districtText}>{data.data.Adresi}</Text>
        <Text style={styles.districtText}>{data.data.Telefon}</Text>
        <View style={styles.borderMap}>
          <Text>MAP</Text>
        </View>
      </View>
    );
  };
  return (

    <View style={styles.mainContainer}>
      <View style={styles.row1}>
        <View style={styles.row1Column}>
          <Text style={styles.navTitle}>Nöbetçi Eczaneler</Text>
        </View>
      </View>
      <View style={styles.row2}>
        <View style={styles.dropdownCity}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            onSelectItem={(val) => { countyData(val.value) }}
          />
        </View>
        <View style={styles.dropdownCounty}>
          <DropDownPicker
            open={open2}
            value={value2}
            items={items2}
            setOpen={setOpen2}
            setValue={setValue2}
            setItems={setItems2}
            onSelectItem={(countytemp) => {
              axioseczanedata(value, countytemp.value);
            }}
            
          />
        </View>
      </View>
      <View style={styles.row3}>
        <View style={styles.flatlistContainer}>
          {eczaneList.length == 0 ? <Text style={{fontSize: 75, color:'black'}}>Veri Bulunamadı!</Text> 
          : 
          <FlatList
            data={eczaneList.data}
            renderItem={(flatvalue) => { 
              console.log("itemflat")
              console.log(flatvalue)
              return(
                <View style={styles.row3Border}>
                <Text style={styles.districtNameText}>Eczane adi: {flatvalue.item.EczaneAdi}</Text>
                <Text style={styles.districtText}>{flatvalue.item.Adresi}</Text>
                <Text style={styles.districtText}>{flatvalue.item.Telefon}</Text>
                <View style={styles.borderMap}>
                  <Text>MAP</Text>
                </View>
              </View>
              );
            }}
            
          />}
          
        </View>
      </View>
    </View>

  );
}


const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
  },
  row1: {
    width: "100%",
    height: "8%",
    backgroundColor: '#ba000d',
    flexDirection: 'column',
    paddingHorizontal: "5%",
  },
  row1Column: {
    width: "100%",
    height: "100%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: "white"
  },
  row2: {
    width: "100%",
    height: "25%",
    backgroundColor: '#f44336',
    flexDirection: 'column',
    justifyContent: 'center',
    elevation: 2,
    zIndex: 2,
    overflow: "visible"
  },
  dropdownCity: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: "4%",
    elevation: 4,
    zIndex: 1000,
    overflow: "visible"
  },
  dropdownCounty: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,

  },
  row3: {
    width: "90%",
    height: "67%",
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: "flex-start",
    paddingTop: 10,
    elevation: 0,
    zIndex: 0,


    display: "flex",
  },
  row3Border: {
    flex: 1,
    minHeight: 200,
    elevation: 0,
    zIndex: 0,
    backgroundColor: '#ff7961',
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
    marginBottom: 5,
    borderRadius: 20,
    padding: 10,
  },
  districtText: {
    fontSize: 11,
    color: 'white',
    fontWeight: '300',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2

  },
  districtNameText: {
    fontSize: 13,
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2

  },
  borderMap: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "60%",
    borderWidth: 3,
    borderRadius: 2,
    borderColor: '#ffebee',
    marginTop: 8
  },
  flatlistContainer: {
    width: "100%",
    height: "100%",
    flexDirection: 'row',
    justifyContent: "flex-start",
    zIndex: 0,
    elevation: 0,


  },


});
