
import { Briefcase, Wrench, Award, GraduationCap, MapPin, Mail, Linkedin, Github, Code } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-7xl sm:text-8xl font-bold bubble-text mb-6">RESUME</h1>
            <div className="flex flex-col items-center space-y-4 mb-8">
              <h2 className="text-3xl font-semibold">Muhammad Abdullah</h2>
              <div className="flex items-center text-gray-600">
                <MapPin size={18} className="mr-2" />
                <span>Lahore, Pakistan</span>
              </div>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <a href="mailto:abdullahsheikh.work@gmail.com" className="flex items-center text-gray-700 hover:text-black">
                  <Mail size={18} className="mr-2" />
                  <span>abdullahsheikh.work@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/mabdullah-sheikh" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-black">
                  <Linkedin size={18} className="mr-2" />
                  <span>linkedin.com/in/mabdullah-sheikh</span>
                </a>
                <a href="https://github.com/abdullah-sheikh" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-black">
                  <Github size={18} className="mr-2" />
                  <span>github.com/abdullah-sheikh</span>
                </a>
              </div>
            </div>
            
            <div className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              <p>Results-Driven Software Engineer with Extensive Experience in Mobile Application Development and Full-Stack Technologies. 
              Skilled in optimizing code, implementing robust state management, and thriving in agile environments. Passionate about 
              leveraging innovative technologies to create scalable, user-centric solutions that drive business success.</p>
            </div>
          </div>
          
          {/* Work Experience Section */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12">
            <div className="p-10">
              <div className="flex items-center mb-8">
                <Briefcase className="mr-3" size={24} />
                <h2 className="text-2xl font-bold">WORK EXPERIENCE</h2>
              </div>
              
              {/* Tkxel */}
              <div className="mb-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold">Tkxel</h3>
                  <div className="flex items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">Nov 2022 - Present</div>
                    <span className="ml-2 text-gray-500">Lahore, PK</span>
                  </div>
                </div>
                <div className="font-medium mb-3 text-gray-700">Software Engineer</div>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>Specialized in React Native development with a focus on state management using MobX and Redux.</li>
                  <li>Optimized code, improved reusability, and implemented unit tests for robust application development.</li>
                  <li>Actively engaged in team collaboration, contributing to a positive and productive work environment.</li>
                  <li>Strengthened technical skills and teamwork abilities through consistent collaboration.</li>
                  <li>Proactively participated in developer communities, staying updated on the latest trends and best practices in mobile development.</li>
                </ul>
              </div>
              
              {/* Codup Software */}
              <div className="mb-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold">Cinch Software</h3>
                  <div className="flex items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">Jun 2022 - Sep 2022</div>
                    <span className="ml-2 text-gray-500">Sweden</span>
                  </div>
                </div>
                <div className="font-medium mb-3 text-gray-700">Software Engineer Intern</div>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>Developed Flutter UI components and widgets by adhering to best practices, enhancing the visual appeal and usability of mobile applications.</li>
                  <li>Gained hands-on expertise in REST API integration and data handling, optimizing processes for improved application performance.</li>
                  <li>Exhibited rapid learning and adaptability, contributing effectively to multiple projects while demonstrating a proactive problem-solving approach.</li>
                </ul>
              </div>
              
             
            </div>
          </div>
          
          {/* Projects Section */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12">
            <div className="p-10">
              <div className="flex items-center mb-8">
                <Code className="mr-3" size={24} />
                <h2 className="text-2xl font-bold">PROJECTS</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Ollivate */}
                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold">Ollivate</h3>
                      <div className="bg-gray-100 px-2 py-1 rounded text-xs">Nov 2024</div>
                    </div>
                    <div className="text-sm text-gray-500 mb-2">React Native</div>
                    <p className="text-gray-700 text-sm mb-2">Developed a gamified mobile application designed to help healthcare professionals retain crucial content.</p>
                    <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1">
                      <li>Implemented interactive learning modules—such as quizzes, simulation challenges, and progress tracking.</li>
                      <li>Collaborated closely with UI/UX designers and backend teams to create a seamless, intuitive user experience.</li>
                    </ul>
                  </CardContent>
                </Card>
                
                {/* Mental Wellness Hub */}
                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold">Your Mental Wellness Hub (Vert-U)</h3>
                      <div className="bg-gray-100 px-2 py-1 rounded text-xs">May 2024</div>
                    </div>
                    <div className="text-sm text-gray-500 mb-2">React Native</div>
                    <p className="text-gray-700 text-sm mb-2">Developed a React Native mobile app creating an inclusive community for mental wellness.</p>
                    <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1">
                      <li>Focused on core values: growth, emotional release, and connection to empower users.</li>
                      <li>Collaborated with cross-functional teams to enhance user experience.</li>
                    </ul>
                  </CardContent>
                </Card>
                
                {/* Signal */}
                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold">Signal</h3>
                      <div className="bg-gray-100 px-2 py-1 rounded text-xs">Jul 2023</div>
                    </div>
                    <div className="text-sm text-gray-500 mb-2">React Native</div>
                    <p className="text-gray-700 text-sm mb-2">Contributed to a real-time incident reporting and security management mobile application.</p>
                    <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1">
                      <li>Integrated location-based services and real-time data feeds for incident tracking.</li>
                      <li>Employed advanced state management techniques to ensure efficient data handling.</li>
                    </ul>
                  </CardContent>
                </Card>
                
                {/* People Guru */}
                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold">People Guru</h3>
                      <div className="bg-gray-100 px-2 py-1 rounded text-xs">Feb 2023</div>
                    </div>
                    <div className="text-sm text-gray-500 mb-2">React Native</div>
                    <p className="text-gray-700 text-sm mb-2">Developed and integrated a React Native mobile app for People Guru HRMS, enhancing HR processes.</p>
                    <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1">
                      <li>Implemented key features like attendance tracking, leave management, and real-time notifications.</li>
                      <li>Collaborated with backend developers to integrate secure RESTful APIs.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Skills & Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Skills */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="p-10">
                <div className="flex items-center mb-6">
                  <Wrench className="mr-3" size={24} />
                  <h2 className="text-2xl font-bold">SKILLS</h2>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-bold mb-2">Languages</h3>
                  <p className="text-gray-700">JavaScript, TypeScript, C++, HTML/CSS, Dart, Python</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-bold mb-2">Tools</h3>
                  <p className="text-gray-700">VS Code, Git, Firebase, Android Studio, Xcode, AWS, Google Cloud Platform</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-bold mb-2">Technologies</h3>
                  <p className="text-gray-700">React Native, Flutter, React, Redux, MobX, MERN Stack</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-bold mb-2">Version Control</h3>
                  <p className="text-gray-700">Git, Github, Bitbucket</p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2">Project Management</h3>
                  <p className="text-gray-700">Jira, Asana</p>
                </div>
              </div>
            </div>
            
            {/* Education */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="p-10">
                <div className="flex items-center mb-6">
                  <GraduationCap className="mr-3" size={24} />
                  <h2 className="text-2xl font-bold">EDUCATION</h2>
                </div>
                
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-bold">FAST University</h3>
                    <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">Sep 2018 - Jul 2022</div>
                  </div>
                  <p className="text-gray-700 italic">Bachelor of Science in Computer Science</p>
                </div>
                
                <div className="flex items-center mb-6">
                  <Award className="mr-3" size={24} />
                  <h2 className="text-2xl font-bold">CERTIFICATIONS</h2>
                </div>
                
                <ul className="space-y-4 text-gray-700">
                  <li>
                    <div className="font-medium">React Native - The Practical Guide</div>
                    <div className="text-sm text-gray-500">Udemy</div>
                  </li>
                  <li>
                    <div className="font-medium">The Complete Flutter Development Bootcamp with Dart</div>
                    <div className="text-sm text-gray-500">Udemy</div>
                  </li>
                  <li>
                    <div className="font-medium">Responsive Website Basics: Code with HTML, CSS, and JavaScript</div>
                    <div className="text-sm text-gray-500">Coursera</div>
                  </li>
                  <li>
                    <div className="font-medium">Getting Started with Python</div>
                    <div className="text-sm text-gray-500">Coursera</div>
                  </li>
                  <li>
                    <div className="font-medium">Google IT Support</div>
                    <div className="text-sm text-gray-500">Google</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Extracurricular */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12">
            <div className="p-10">
              <div className="flex items-center mb-6">
                <Award className="mr-3" size={24} />
                <h2 className="text-2xl font-bold">LEADERSHIP / EXTRACURRICULAR</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex flex-col mb-2">
                    <h3 className="text-lg font-bold">Google Developer Students Club</h3>
                    <div className="flex justify-between items-center">
                      <div className="text-gray-700 italic">Android Head</div>
                      <div className="text-sm text-gray-500">Fall 2021 - Spring 2022</div>
                    </div>
                    <div className="text-sm text-gray-500 mb-2">FAST NU</div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Elected as the Android Head, developing management, leadership, and communication skills.
                    Improved technical capabilities through active contributions, gaining a well-rounded skill set.
                  </p>
                </div>
                
                <div>
                  <div className="flex flex-col mb-2">
                    <h3 className="text-lg font-bold">FPS</h3>
                    <div className="flex justify-between items-center">
                      <div className="text-gray-700 italic">Member</div>
                      <div className="text-sm text-gray-500">Fall 2020 - Spring 2022</div>
                    </div>
                    <div className="text-sm text-gray-500 mb-2">FAST NU</div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    During my tenure as a photographer with the Fast Photography Society, I had the privilege of 
                    documenting numerous events on campus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hobbies */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12">
            <div className="p-10">
              <div className="flex items-center mb-6">
                <h2 className="text-2xl font-bold">HOBBIES</h2>
              </div>
              
              <p className="text-gray-700">
                Travel, cuisine, space technology and cosmology
              </p>
            </div>
          </div>
          
          {/* Contact */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Feel free to contact me</p>
            <div className="flex justify-center space-x-8">
              <a href="mailto:abdullahsheikh.work@gmail.com" className="text-gray-700 hover:text-black transition-colors">
                abdullahsheikh.work@gmail.com
              </a>
              <a href="tel:+923158811928" className="text-gray-700 hover:text-black transition-colors">
                +92-315-8811928
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ResumePage;
