import axios from 'axios';


let url="http://192.168.100.205:9200/appointment/populated";
let header={headers:{Authorization:'Bearer '+localStorage.getItem('token')}}
let data;


async function getPending(){
    await axios.get(`${url}/0`,header).then((res)=>{
        data=res.data;
        // console.log(`${res.data[0].person.first_name} ${res.data[0].person.last_name}`)
        // this.data[0].type=res.data[0].type
        for(let i=0; i<res.data.length; i++){
            data[i].client=`${data[i].person.first_name} ${data[i].person.last_name}`
            switch(res.data[i].type){
                case 0:
                    data[i].type='Mobile Service';
                    break;
                default:
                    data[i].type='Drop Off';
                    break;
            }
            switch(res.data[i].service){
                case 0:
                    data[i].service='Battery Concern';
                    break;
                case 1:
                    data[i].service='Transmission Concern';
                    break;
                case 2:
                    data[i].service='Break System';
                    break;
                case 3:
                    data[i].service='Heating Issues';
                    break;
                default:
                    data[i].service='Other Issues';
                    break;
            }
        }
        console.log(data);
        return data;
    })
}

export {getPending}