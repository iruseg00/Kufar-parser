const KufarService = require("../../services/KufarService");
const {logger} = require('../../logs/log');

var oR =
{
    1:'Брест',
    2:'Гомель',
    3:'Гродно',
    4:'Могилев',
    5:'Минская область',
    6:'Витебск',
    7:'Минск',
}

var oH =
{
    1:'Панельный',
    2:'Монолитный',
    3:'Кирпичный',
}

var oBt =
{
    1:'Раздельный',
    2:'Совмещенный',
    3:'Два',
}

var oBl =
{
    1:'Есть',
    2:'Нет',
    3:'Лоджия',
    4:'Два',
}

var oC =
{
    1:"Вторичное жилье",
    2:"Новое",
}

function send(object)
{
    try 
    {
        object.phone = JSON.parse( JSON.stringify({ phone : object.phone}) );
        object.region = oR[object.region];
        object.house_type = oH[object.house_type];
        object.bathroom = oBt[object.bathroom];
        object.balcony = oBl[object.balcony];
        object.condition = oC[object.condition];
        object.name = object.name.replace(/\''/g , "");
        object.description = object.description.replace("\\\\\n" , "");
        if(object.floor)
            object.floor = object.floor[0];
        if(object.contact_person)
            object.contact_person = object.contact_person.replace(/\''/g , "");
        if(object.price_byn == 0) 
        {
            object.price_usd = "Договорная";
            object.price_byn = "Договорная";
        }
        else
        {
            object.price_byn = (object.price_byn / 100).toFixed(0);
            object.price_usd = (object.price_usd / 100).toFixed(0);
        }
        if (object.type == 'sell') object.type = "Продажа";
        for(key in object)
        {
            if(object[key] === undefined)
                object[key] = "";
        }
        object.site = "re.kufar.by";

        logger.info('KUFAR: Archived success:  ' + object.link);
        return KufarService.create(object);
    } 
    catch (error) 
    {
        logger.error('KUFAR: error in send.js , error: ' + error);
    }
}

module.exports = send;