'use strict'

angular.module('myApp.homepage.services',[])
.factory('$nameFactoryTour',function()
{
  return {
    tourName:[
      {
        id:1,
        name:'TOUR DU LỊCH GIẢM GIÁ',
        type:'discount',
      },
      {
        id:2,
        name:'TOUR VÉ LẺ - GHÉP ĐOÀN',
        type:'group',
      },
      {
        id:3,
        name:'TOUR NƯỚC NGOÀI',
        type:'foreign',
      },
      {
        id:4,
        name:'TOUR DU LỊCH MIỀN BẮC',
        type:'north',
      },
      {
        id:5,
        name:'TOUR DU LỊCH MIỀN TRUNG',
        type:'middle',
      },
      {
        id:6,
        name:'TOUR DU LỊCH MIỀN NAM',
        type:'south',
      }
    ],
    combo:[  
      {
        img:"/modules/homepage/public/img/combo/2021.png",
        name:"Tour Tết 2021"
      },
      {
        img:"/modules/homepage/public/img/combo/tour-kich-cau.png",
        name:"Tour Kích Cầu"
      },
      {
        img:"/modules/homepage/public/img/combo/tour-giam-gia-soc.png",
        name:"Tour Siêu Giảm Giá"
      },
      {
        img:"/modules/homepage/public/img/combo/combo-gia-sốc.png",
        name:"Combo Giá Sốc"
      },
      {
        img:"/modules/homepage/public/img/combo/free-easy.png",
        name:"Tour Free & Easy"
      } 
    ],
    tourTravel:[
      {
        id:1,
        smallImg:"/modules/homepage/public/img/cheap/dulichbennghe-PhuYenNhaTrangDaNangQuangBinh3-500x278.jpg",
        name:"Tour du lịch giảm giá: Tour du lịch Đà Nẵng – Hội An – Huế",
        time:"3 ngày 2 đêm",
        price:2200000,
        type:'discount',
        location:'middle'
      },
      {
        id:2,
        smallImg:"/modules/homepage/public/img/cheap/dulichbennghe-Phan-Thiet5-500x278.jpg",
        name:"Tour du lịch giảm giá: Tour du lịch Phan Thiết-Ninh Chữ",
        time:"3 ngày 2 đêm",
        price:1850000,
        type:'',
        location:'south'
      },
      {
        id:3,
        smallImg:"/modules/homepage/public/img/cheap/dulichbennghe-PhuQuoc1-1-500x278.jpg",
        name:"Tour du lịch giảm giá: Tour Hà Nội-Mù Cang Chải 3 ngày 2 đêm",
        time:"3 ngày 2 đêm",
        price:2350000,
        type:'',
        location:'north'
      },
      {
        id:4,
        smallImg:"/modules/homepage/public/img/cheap/dulichbennghe-Phan-Thiet1-500x278.jpg",
        name:"Tour du lịch giảm giá: Tour Phan thiế",
        time:"2 ngày 2 đêm",
        price:2350000,
        type:'',
        location:'north'
      },
      {
        id:4,
        smallImg:"/modules/homepage/public/img/cheap/dulichbennghe-VungTau-1-500x278.jpg",
        name:"Tour du lịch giảm giá: Tour Phan thiế",
        time:"2 ngày 2 đêm",
        price:2350000,
        type:'',
        location:'north'
      },
      {
        id:4,
        smallImg:"/modules/homepage/public/img/cheap/dulichbennghe-VungTau-1-500x278.jpg",
        name:"Tour du lịch giảm giá: Tour Phan thiế",
        time:"2 ngày 2 đêm",
        price:2350000,
        type:'',
        location:'north'
      },

    ],
    getCombo(){
      return this.combo
    },
    getTourTravel(){
      return this.tourTravel
    },
    getTourTravelDiscountById(id){
      for(var i in this.tourTravel){
        if(id==this.tourTravel[i].id){
          return this.tourTravel[i];
        }
      }
    },
    getTourName(){
      return this.tourName
    },
  }
}
)

// var c = ['a','b','c'];
// for(var i = 0; i < c.length; i++){

// }
// for(var i of c){

// }
// for(var i in c){
//   console.log(c[i]);
// }
// c = [
//   0:'a',
//   1:'b',
//   2:'c'
// ]

