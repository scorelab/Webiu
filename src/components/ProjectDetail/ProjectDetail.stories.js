import React from 'react';

import { ProjectDetail } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Projects/ProjectDetail',
  component: ProjectDetail,
  argTypes: {
     project: {control: 'object'}
  }
};

export const projectdetail = (args) => <ProjectDetail {...args} />

projectdetail.args = {
   project: {image: "https://scorelab.org/logos/projects/bassa.png",
             title: "Bassa",
             description: "Bassa is automated Download Queue for Enterprise to take the best use of Internet bandwidth. It solves the problem of wasting internet bandwidth by queuing a download if it is larger than a given threshold value in high traffic and when the traffic is low, it completes the download of the files.",
             screenshots: [{imageUrl: "https://scorelab.org/images/screenshots/Bassa/1.png"}, {imageUrl: "https://scorelab.org/images/screenshots/Bassa/2.png"}],
             links: [{url: "https://github.com/scorelab/Bassa", name: "Github Repo"}, {url: "https://gitter.im/scorelab/Bassa", name: "Gitter Channel"}]}
}