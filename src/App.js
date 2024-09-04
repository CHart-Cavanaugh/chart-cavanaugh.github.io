import './App.scss';
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import AppSection from './components/AppSection/AppSection';
import ProjectSelectionArea from './components/ProjectSelectionArea/ProjectSelectionArea';
import NavBar from './components/NavBar/NavBar';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';



const SECTION_1_TEXT_0 = ( // ORIGINAL TEXT

  // `Welcome! My name is Christopher Hart-Cavanaugh. 
  // I am a student and a follower for the purpose of learning how 
  // to better solve problems in different situations. I seek to 
  // improve my knowledge of the tools that are available to me 
  // as a human being and how those tools can be used to solve 
  // problems in different situations. I work hard to improve my 
  // capabilities for solving problems, using the tools that are 
  // available to me as a human being. I wish to build unique and 
  // interesting things that can be used or analyzed for purposes 
  // with good intentions. I am a teacher and a leader for the purpose 
  // of getting things done to build a better world.`

  ``

);
const SECTION_1_TEXT_1 = ( //AI IMPROVED TEXT 1/2

  `Welcome! My name is Christopher Hart-Cavanaugh. I am a student and a 
  lifelong learner, dedicated to enhancing my problem-solving skills in 
  various situations. My goal is to deepen my understanding of the tools 
  available to us as human beings and to explore how these tools can be 
  applied effectively to solve challenges. I am committed to continuously 
  improving my abilities, striving to use these tools creatively and 
  thoughtfully. I have a passion for building unique and innovative 
  solutions, aiming to contribute positively to the world. As a teacher 
  and a leader, I am driven by the desire to take action and inspire others, 
  working together to create a better future.`

);
const SECTION_2_TEXT = (

  `UNDER_CONSTRUCTION`

);
const SECTION_3_TEXT_0 = (

  // `Born and raised in Las Vegas, Nevada. Through early childhood acting 
  // ambitions, I studied memorization, posing, dialogue, and expression 
  // techniques. During my time as a musician, where I participated in a 
  // multitude of competitions and performances (for band, philharmonic, 
  // honor band, and a musical), I developed an understanding of music 
  // performance, music theory, and sound composition. While attending the 
  // University of Nevada, Las Vegas, my study of computer science and 
  // mathematics and how they relate to video games allowed me to develop 
  // strategies for problem analysis, problem solving, information structuring, 
  // and understanding information relativity. The one thing that remained 
  // consistent through most of my upbringing was my love and enjoyment of 
  // video games and how video games helped me do better for myself. Video 
  // games gave me some of the best friendships I could ever ask for, 
  // challenged me to improve myself and my understanding of things, and taught 
  // me how to work together with others to overcome a shared obstacle. When I 
  // dropped out of college, my love for video games drove me to develop a 
  // passion I could believe in that kept me going. Through that passion, I 
  // developed understandings and skills in product/service composition, design, 
  // custom asset development (and the various tools used to build them), project 
  // management, and communication.`

  ``

);

const SECTION_3_TEXT_1 = (

  `I was born and raised in Las Vegas, Nevada. My early interest in acting led me 
  to study memorization, posing, dialogue, and expression techniques. Later, as a 
  musician, I participated in various competitions and performances, including band, 
  philharmonic, honor band, and a musical. This experience helped me develop a deep 
  understanding of music performance, music theory, and sound composition. While 
  attending the University of Nevada, Las Vegas, I studied computer science and 
  mathematics, focusing on how they relate to video games. This academic background 
  allowed me to develop skills in problem analysis, problem-solving, information 
  structuring, and understanding information relativity. Throughout my life, video 
  games have been a consistent source of joy and inspiration. They have provided me 
  with some of the best friendships I could ever ask for, challenged me to improve 
  myself, and taught me the importance of teamwork in overcoming shared obstacles. 
  After leaving college, my passion for video games drove me to pursue a career in the 
  industry. This passion fueled my growth and led me to develop valuable skills in 
  product and service composition, design, custom asset development, project management, 
  and communication. Through these experiences, I found a purpose that motivates me 
  every day.`

);



function App() {

  let currentSelection = useSelector((state) => state.currentSelection.value)
  let currentTab = useSelector((state) => state.currentTab.value)
  let x = 0;



  useEffect(() => {

    // console.log(currentSelection);
    console.log(currentTab);

  }, [currentSelection, currentTab])



  return (

    <div className="App">
      <AppHeader />
      <NavBar />
      <AppSection
        key={"Section 1"}
        id="intro-section"
        sectionName={"Introduction"}
        sectionText={SECTION_1_TEXT_1}
      />
      <AppSection
        key={"Section 2"}
        id="projects-section"
        sectionName={"Projects"}
      />
      <AppSection
        key={"Section 3"}
        id="background-section"
        sectionName={"Background"}
        sectionText={SECTION_3_TEXT_1}
      />
      <AppFooter />
    </div>

  );

}



export default App;