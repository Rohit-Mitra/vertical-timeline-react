import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaStop, FaPlay, FaExclamationCircle, FaThumbsUp } from 'react-icons/fa';

const Vertical = () => {
    return(
        <div className='vertical'>
           <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(255, 138, 221)', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(255, 138, 221)' }}
                date='9th February 2023'
                iconStyle={{ background: 'rgb(255, 138, 221)', color: '#000' }}
                icon={<FaPlay />}
                >
                <h3 className="vertical-timeline-element-title">Registration Begins!</h3>
                <h4 className="vertical-timeline-element-subtitle">9th february 2023</h4>
                <p>
                Invite your friends and devs, create a team, and put on your thinking caps while we review your entries
                </p>
            </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date='9th March 2022'
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
    icon={<FaStop />}
  >
    <h3 className="vertical-timeline-element-title">Registration ends</h3>
    <h4 className="vertical-timeline-element-subtitle"> 9th March 2023</h4>
    <p>
    Its time to roll the wheels
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="4th - 10th March 2022"
    contentStyle={{ background: 'rgb(75, 255, 190)', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(75, 255, 190)' }}
    iconStyle={{ background: 'rgb(75, 255, 190)', color: '#000' }}
    icon={<FaExclamationCircle />}
  >
    <h3 className="vertical-timeline-element-title">Team confirmation rollout!</h3>
    <h4 className="vertical-timeline-element-subtitle">4th - 10th March 2022</h4>
    <p>
    The confirmation mails are sent and the top contestant teams are selected to participate in this 48 Hours showdown.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="9th February 2022"
    contentStyle={{ background: 'rgb(250, 255, 61)', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(250, 255, 61)' }}
    iconStyle={{ background: 'rgb(250, 255, 61)', color: '#000' }}
    icon={<FaThumbsUp/>}
  >
    <h3 className="vertical-timeline-element-title">Check In! Let's Hack</h3>
    <h4 className="vertical-timeline-element-subtitle">9th February 2022</h4>
    <p>
    Welcome to the .....
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
        </div>
    )
    }
export default Vertical;