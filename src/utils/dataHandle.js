function dataHandle(data){
    for(let i=0; i<data.length; i++){
        data[i].client=`${data[i].person.first_name} ${data[i].person.last_name}`
        switch(data[i].type){
            case 0:
                data[i].type='Mobile Service';
                break;
            default:
                data[i].type='Drop Off';
                break;
        }
        switch(data[i].service){
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
    return data;
}

function dataHandleSingle(data){
    data.client=`${data.person.first_name} ${data.person.last_name}`
    switch(data.type){
        case 0:
            data.type='Mobile Service';
            break;
        default:
            data.type='Drop Off';
            break;
    }
    switch(data.service){
        case 0:
            data.service='Battery Concern';
            break;
        case 1:
            data.service='Transmission Concern';
            break;
        case 2:
            data.service='Break System';
            break;
        case 3:
            data.service='Heating Issues';
            break;
        default:
            data.service='Other Issues';
            break;
    }
    return data;
}

export {dataHandle,dataHandleSingle}