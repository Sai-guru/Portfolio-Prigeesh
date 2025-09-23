
import './Education.css';


const Education = () => {
  return (
    <div className="education-container">
      <h2 className="section-title">Education</h2>

      <table className="education-table">
        <tbody>
          <tr>
            <td className="label">College Name:</td>
            <td>Vel Tech High Tech Dr.Rangarajan Dr.Sakunthala Engineering College</td>
          </tr>
          <tr>
            <td className="label">Degree:</td>
            <td>B.E. Computer Science and Engineering</td>
          </tr>
          <tr>
            <td className="label">CGPA:</td>
            <td>8.80</td>
          </tr>
           <tr>
            <td className="label">Batch:</td>
            <td>2023 - 2027</td>
          </tr>
        </tbody>
      </table>

      <hr className="divider" />

      <h3 className="subsection-title">Courses Completed</h3>

      <table className="courses-table">
        <tbody>
          <tr>
            <td>MERN full stack web development course at Error Makes Clever</td>
          </tr>
          <tr>
            <td>Full Stack Development course at Revamp Academy</td>
          </tr>
          <tr>
            <td>Web development course program at Rinex</td>
          </tr>
           <tr>
            <td>DSA course at NAMASTE DEV</td>
          </tr>
          <tr>
            <td>DMO course at Computer Software College</td>
          </tr>
          {/* Add more <tr> as needed */}
        </tbody>
      </table>
      <h3 className="subsection-title">Internship</h3>

      <table className="courses-table">
        <tbody>
          <tr>
            <td>Full Stack Developer Intern at Revamp</td>
          </tr>
          <tr>
            <td>Web development Internship at Rinex</td>
          </tr>
          {/* Add more <tr> as needed */}
        </tbody>
      </table>
    </div>
  );
}


export default Education;
