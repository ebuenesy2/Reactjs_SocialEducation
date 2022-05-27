import "./index.css";

//! TimeLine
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


//! Metariul
import Alert from '@material-ui/lab/Alert';

//! İcon
import PersonIcon from '@material-ui/icons/Person';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

export const Index =(props: any) => {
  console.log("proops:",props);

    
  return (
        <div className='list'>

          <VerticalTimeline>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="20th may, 2010 - 15:25:90"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<PersonIcon />}
            >

            <div className="timeLineContainer">
                  
                    <Alert variant="filled" severity="success">
                      Dosya Ekleme Başarılı
                  </Alert>
                
                  <div className="logLocation">
                      <VisibilityIcon className="visibility" />
                      <a className="table"> file </a>
                      <a className="title"> file_add_successful </a>
                  </div>
                  <div className="logIdPanel">
                        <FingerprintIcon />
                        <div className="logId"> 1</div>
                  </div>
                

                  <a className="created_byPanel"  href="/user/1">
                        <PersonIcon /> 
                        <p className="created_byNameSurname"> Peter Butusov  </p>
                  </a>
            </div>
              
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="20th may, 2010 - 15:25:90"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<PersonIcon />}
            >
              
            <div className="timeLineContainer">
                  
                    <Alert variant="filled" severity="success">
                      Dosya Ekleme Başarılı
                  </Alert>
                
                  <div className="logLocation">
                      <VisibilityIcon className="visibility" />
                      <a className="table"> file </a>
                      <a className="title"> file_add_successful </a>
                  </div>
                  <div className="logIdPanel">
                        <FingerprintIcon />
                        <div className="logId"> 1</div>
                  </div>
                

                  <a className="created_byPanel"  href="/user/1">
                        <PersonIcon /> 
                        <p className="created_byNameSurname"> Peter Butusov  </p>
                  </a>
            </div>
              
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="20th may, 2010 - 15:25:90"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<PersonIcon />}
            >
              
            <div className="timeLineContainer">
                  
                    <Alert variant="filled" severity="success">
                      Dosya Ekleme Başarılı
                  </Alert>
                
                  <div className="logLocation">
                      <VisibilityIcon className="visibility" />
                      <a className="table"> file </a>
                      <a className="title"> file_add_successful </a>
                  </div>
                  <div className="logIdPanel">
                        <FingerprintIcon />
                        <div className="logId"> 1</div>
                  </div>
                

                  <a className="created_byPanel"  href="/user/1">
                        <PersonIcon /> 
                        <p className="created_byNameSurname"> Peter Butusov  </p>
                  </a>
            </div>
              
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="20th may, 2010 - 15:25:90"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<PersonIcon />}
            >
              
            <div className="timeLineContainer">
                  
                    <Alert variant="filled" severity="success">
                      Dosya Ekleme Başarılı
                  </Alert>
                
                  <div className="logLocation">
                      <VisibilityIcon className="visibility" />
                      <a className="table"> file </a>
                      <a className="title"> file_add_successful </a>
                  </div>
                  <div className="logIdPanel">
                        <FingerprintIcon />
                        <div className="logId"> 1</div>
                  </div>
                

                  <a className="created_byPanel"  href="/user/1">
                        <PersonIcon /> 
                        <p className="created_byNameSurname"> Peter Butusov  </p>
                  </a>
            </div>
              
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="20th may, 2010 - 15:25:90"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<PersonIcon />}
            >
              
            <div className="timeLineContainer">
                  
                    <Alert variant="filled" severity="success">
                      Dosya Ekleme Başarılı
                  </Alert>
                
                  <div className="logLocation">
                      <VisibilityIcon className="visibility" />
                      <a className="table"> file </a>
                      <a className="title"> file_add_successful </a>
                  </div>
                  <div className="logIdPanel">
                        <FingerprintIcon />
                        <div className="logId"> 1</div>
                  </div>
                

                  <a className="created_byPanel"  href="/user/1">
                        <PersonIcon /> 
                        <p className="created_byNameSurname"> Peter Butusov  </p>
                  </a>
            </div>
              
            </VerticalTimelineElement>
            
             
          </VerticalTimeline> 
        
        </div>
    
  )
}

export default Index;
