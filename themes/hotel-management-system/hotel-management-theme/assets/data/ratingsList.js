import { faUser, faBed, faBuilding } from "@fortawesome/free-solid-svg-icons"

const RatingsList = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1631049035182-249067d7618e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MTQ5NDE4Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    userName: "Jone Doe",
    experience: "Good Experience",
    ratingValue: 2.5,
    details: [
      {
        id: "1",
        key: "Adults",
        value: "3",
        icon: faUser,
      },
      {
        id: "2",
        key: "Beds",
        value: "1",
        icon: faBed,
      },
      {
        id: "3",
        key: "Floor",
        value: "1",
        icon: faBuilding,
      },
    ],
  },
]

export default RatingsList
