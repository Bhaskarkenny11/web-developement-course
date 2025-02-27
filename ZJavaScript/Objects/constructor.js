function HouseKeepr(experience,name,cleaningsect){
    this.name=name;
    this.experience=experience;
    this.cleaningsect=cleaningsect;
    this.clean=function(){
       console.log("cleaning in progress")
    }

}
var HouseKeepr1=new HouseKeepr(5,'tiger','house')
console.log(HouseKeepr1)
var housekeeper2= new HouseKeepr(
    4,'lion','kitche'
)
console.log(housekeeper2.clean()) 