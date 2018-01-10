
class Driver{
  constructor(name, sd){
    this.name = name
    this.startDate = new Date(sd)
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear()
  }
}


class Route{
  constructor(beginningLocation,endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    let vertical_diff = this.beginningLocation.vertical - this.endingLocation.vertical

    let horiz_diff = eastWest.indexOf(this.beginningLocation.horizontal)- eastWest.indexOf(this.endingLocation.horizontal)

    return Math.abs(vertical_diff) + Math.abs(horiz_diff)
  }

  estimatedTime(isPeakHours){
    let answer;
    isPeakHours ? answer = Math.round(this.blocksTravelled()/2): answer = Math.round(this.blocksTravelled()/3)
    return answer;
  }

}
