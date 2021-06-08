## Initial Setup
Hope you have successfully set up the project in your local system and install all dependencies

## About the GitterRoomList Component
This is a resuasble component for getting the list of all Gitter Rooms of an organization and getting the links of joining particular rooms. This Component is highly reusable and customizable via props

## How to use the component
Import the component to `pages/index.js`
`import {GiiterRoomList} from "../components/GitterRoomList";`

## How to handle props to the component
```
<GitterRoomsList title="Gitter Room List" gitterOrganizationName="org-name" groupId="groud-id" 
                       gitterToken="access-token" small={false} limit={9} />
```

`title` prop is the suitable title you want to give to this section
`gitterOrganizationName` prop is the name of organization for e.g. scorelab
`groupId` prop is the id of the group on respective gitter IRC
`gitterToken` is the access-token for an individual to access gitter data
`limit` prop is the limit of number of rooms you want to show per page
`small` prop is customized version of whether the display shoul be full-screen or not