import {
  faBuilding,
  faUser,
  faDollar,
  faBed,
} from "@fortawesome/free-solid-svg-icons"

const RoomList = [
  {
    id: "1",
    imgUrl:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTc4NzgxNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    title: "Common Triple",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    roomId: "1",
    moreInfoList: [
      { id: "1", icon: faDollar, key: "Price", value: "$90" },
      { id: "2", icon: faUser, key: "Adults", value: "3" },
      { id: "3", icon: faBuilding, key: "Floor", value: "1" },
      { id: "4", icon: faBed, key: "Beds", value: "1" },
    ],
    availability: true,
    type: "Luxury",
  },
  {
    id: "2",
    imgUrl:
      "https://images.unsplash.com/photo-1515362655824-9a74989f318e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MTc1MTI3MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    title: "Common Double",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    roomId: "1",
    moreInfoList: [
      { id: "1", icon: faDollar, key: "Price", value: "$90" },
      { id: "2", icon: faUser, key: "Adults", value: "3" },
      { id: "3", icon: faBuilding, key: "Floor", value: "1" },
      { id: "4", icon: faBed, key: "Beds", value: "1" },
    ],
    availability: true,
    type: "Couple",
  },
  {
    id: "3",
    imgUrl:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTc4NzgxNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    title: "Common Triple",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    roomId: "1",
    moreInfoList: [
      { id: "1", icon: faDollar, key: "Price", value: "$90" },
      { id: "2", icon: faUser, key: "Adults", value: "3" },
      { id: "3", icon: faBuilding, key: "Floor", value: "1" },
      { id: "4", icon: faBed, key: "Beds", value: "1" },
    ],
    availability: true,
    type: "Family",
  },
  {
    id: "4",
    imgUrl:
      "https://images.unsplash.com/photo-1512918580421-b2feee3b85a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    title: "Common Triple",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    roomId: "1",
    moreInfoList: [
      { id: "1", icon: faDollar, key: "Price", value: "$90" },
      { id: "2", icon: faUser, key: "Adults", value: "3" },
      { id: "3", icon: faBuilding, key: "Floor", value: "1" },
      { id: "4", icon: faBed, key: "Beds", value: "1" },
    ],
    availability: true,
    type: "Family",
  },
  {
    id: "5",
    imgUrl:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTc4NzgxNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    title: "Common Triple",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    roomId: "1",
    moreInfoList: [
      { id: "1", icon: faDollar, key: "Price", value: "$90" },
      { id: "2", icon: faUser, key: "Adults", value: "3" },
      { id: "3", icon: faBuilding, key: "Floor", value: "1" },
      { id: "4", icon: faBed, key: "Beds", value: "1" },
    ],
    availability: true,
    type: "Couple",
  },
  {
    id: "6",
    imgUrl:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTc4NzgxNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    title: "Common Triple",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    roomId: "1",
    moreInfoList: [
      { id: "1", icon: faDollar, key: "Price", value: "$90" },
      { id: "2", icon: faUser, key: "Adults", value: "3" },
      { id: "3", icon: faBuilding, key: "Floor", value: "1" },
      { id: "4", icon: faBed, key: "Beds", value: "1" },
    ],
    availability: true,
    type: "Couple",
  },
]

export default RoomList
