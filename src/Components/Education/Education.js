import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

//<i class="fas fa-user-graduate"></i>

const Education = () => {
  return (
    <div style={{ background: "#242638" }}>
      <SectionTitle>Education/Training</SectionTitle>
      <div className=''>
        <VerticalTimeline>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            date='2021,July - Present'
            iconStyle={{
              background: "#0DCAF0",
              color: "#fff",
              textAlign: "center",
              fontSize: "30px",
            }}
            icon={<FontAwesomeIcon icon={faUserGraduate} />}>
            <h3 className='vertical-timeline-element-title'>
              Programming Hero
            </h3>
            <h5>Complete Web Development with Jhankar Mahbub</h5>
            <h4 className='vertical-timeline-element-subtitle'>Score: 92%</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            date='2020,Oct - Present'
            iconStyle={{
              background: "#0DCAF0",
              color: "white",
              textAlign: "center",
              fontSize: "30px",
            }}
            icon={<FontAwesomeIcon icon={faUserGraduate} />}>
            <h3 className='vertical-timeline-element-title'>
              Sonargaon University
            </h3>
            <h5>B.Sc in Computer Science And Engineering</h5>
            <h4 className='vertical-timeline-element-subtitle'>CGPA: 3.60</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            date='2016, July - 2018, July '
            iconStyle={{
              background: "#0DCAF0",
              color: "#fff",
              textAlign: "center",
              fontSize: "30px",
            }}
            icon={<FontAwesomeIcon icon={faUserGraduate} />}>
            <h3 className='vertical-timeline-element-title'>
              Govt. Shahid Suhrawardy College
            </h3>
            <h5>Science</h5>
            <h4 className='vertical-timeline-element-subtitle'>GPA: 3.33</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            date='2014, Jan - 2016, July'
            iconStyle={{
              background: "#0DCAF0",
              color: "#fff",
              textAlign: "center",
              fontSize: "30px",
            }}
            icon={<FontAwesomeIcon icon={faUserGraduate} />}>
            <h3 className='vertical-timeline-element-title'>
              Hazi Shariat Ullah High School
            </h3>
            <h5>Science</h5>
            <h4 className='vertical-timeline-element-subtitle'>GPA: 4.56</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
