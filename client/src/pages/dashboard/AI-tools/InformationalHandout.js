import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import FormRow from '../../../components/FormRow';
import CardContent from '@mui/material/CardContent';
import { useAppContext } from '../../../context/appContext';
import Wrapper from '../../../assets/wrappers/InputForm';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const InformationalHandout = () => {
  const { displayAlert, isLoading } = useAppContext();

  const [completion, setCompletion] = useState('');
  const [subject, setSubject] = useState('');
  const [gradeLevel, setGradeLevel] = useState('');
  const [text, setText] = useState('');

  async function fetchApi(subject, gradeLevel) {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer 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',
      },
      body: JSON.stringify({
        model: 'text-davinci-002',
        prompt: `Task: Create an informational handout for my 10th grade high school chemistry class about the periodic table<h1>Handout Should Cover</h1>- The history of the periodic table<br/>- The parts of the periodic table<br/>- The types of elements<h3>Handout</h3><h4>Introduction</h4>The periodic table is a chart that shows the elements in order of increasing atomic number. The elements are grouped together based on their chemical properties. The periodic table is a powerful tool for chemists, as it helps them to predict the properties of new elements.<h4>History</h4>The periodic table was first developed by Dmitri Mendeleev in 1869. Mendeleev arranged the elements in order of increasing atomic number and noticed that certain elements had similar properties. He used this information to predict the properties of new elements.<h4>Parts</h4>The periodic table has four main parts: the header, the main body, the footer, and the legend. The header contains the name and symbol of the element. The main body contains the atomic number, atomic mass, and electron configuration of the element. The footer contains the element's group and period. The legend contains the groups of elements.<h4>Types</h4>There are three types of elements: metals, nonmetals, and metalloids. Metals are elements that are good conductors of heat and electricity. Nonmetals are elements that are poor conductors of heat and electricity. Metalloids are elements that have properties of both metals and nonmetals.<h4>Students will be able to</h4>- Students will be able to describe the history of the periodic table.<br/>- Students will be able to explain the parts of the periodic table.<br/>- Students will be able to list the types of elements. ### Task: Create an informational handout for my 6th grade students about The Great Depression<h1>Handout should cover</h1>- the causes of the Great Depression<br/>- the effects of the Great Depression</br>- how families were affected by the Great Depression, etc.<h3>Handout</h3><h4>Introduction</h4>The Great Depression was a severe economic downturn that lasted from 1929 to 1939. It was the longest and most severe depression ever experienced by the industrialized Western world. The Great Depression began in the United States after a major stock market crash in October 1929. The effects of the Great Depression quickly spread throughout the world. By 1933, unemployment had risen to 25% in the United States, and it rose to 33% in other countries.<h4>Causes</h4>There are many different factors that contributed to the Great Depression. One of the main causes was the stock market crash of 1929. This crash caused a loss of faith in the economy and a decrease in spending and investment. Another cause was the uneven distribution of wealth in the 1920s. The rich were getting richer while the poor were getting poorer. This led to increased tensions and ultimately to the Great Depression.<h4>Effects</h4>The Great Depression had a number of devastating effects. One effect was the high rate of unemployment. This caused immense financial hardship for families and led to an increase in homelessness. Another effect was the decrease in international trade. This led to a decline in production and an increase in prices. The Great Depression also caused a decrease in the money supply, which led to deflation.<h4>Families</h4>The Great Depression affected families in a number of ways. Many families lost their homes and were forced to live in poverty. Others were forced to move in with relatives or take in boarders to make ends meet. Many families also had to cut back on food and other necessities. The Great Depression was a difficult time for families, but they remained strong and helped each other through it.<h4>Students will be able to</h4>- Students will be able to describe the causes of the Great Depression.<br/>- Students will be able to explain the effects of the Great Depression.<br/>- Students will be able to describe how families were affected by the Great Depression. ### Task: Create an informational handout for my 9th grade students AP Human Geography Students about Feudalism<h1>Handout Should Cover</h1>- The origins of feudalism <br/>- The structure of feudalism <br/>- The benefits and drawbacks of feudalism<h3>Handout</h3><h4>Introduction</h4>Feudalism was a system of government that was popular in Europe during the Middle Ages. Under feudalism, a lord owned all the land and granted it to vassals in exchange for their loyalty and service. The vassals were also responsible for protecting the lord's property and people. Feudalism allowed lords to maintain control over their land and people, and it allowed vassals to have a place to live and work.<h4>Origins</h4>Feudalism began in the 9th century, after the fall of the Carolingian Empire. The empire had been divided into many small kingdoms, and each kingdom was ruled by a lord. The lords granted land to vassals in exchange for their loyalty and service.<h4>Structure</h4>Under feudalism, the lord owned all the land and granted it to vassals in exchange for their loyalty and service. The vassals were also responsible for protecting the lord's property and people. The lord-vassal relationship was based on a system of mutual obligation and support.<h4>Benefits</h4>Feudalism allowed lords to maintain control over their land and people. It also allowed vassals to have a place to live and work. Feudalism was a system of government that provided stability and order during a time of turmoil and change.<h4>Drawbacks</h4>Feudalism was a system of government that was based on a hierarchy of power. The lord had complete control over the vassal, and the vassal had no say in how the lord governed. Feudalism also led to the development of a class system, where people were born into their social class and had little chance of moving up in the world.<h4>Students will be able to</h4>- Students will be able to describe the origins of feudalism.<br/>- Students will be able to explain the structure of feudalism.<br/>- Students will be able to list the benefits and drawbacks of feudalism. ### Task: Create an informational handout for my 5th grade students about solar systems<h1>Handout Should Cover</h1>- The definition of a solar system <br/>- The parts of a solar system <br/>- The types of solar systems<h3>Handout</h3><h4>Introduction</h4>A solar system is a star and all of the planets and other objects that orbit around it. Our solar system consists of the sun, nine planets, and numerous moons, asteroids, and comets. Solar systems can vary in size and composition, but all systems have a star at the center.<h4>Definition</h4>A solar system is a star and all of the planets and other objects that orbit around it. For example, our solar system consists of the sun, nine planets, and numerous moons, asteroids, and comets. Solar systems can vary in size and composition, but all systems have a star at the center.<h4>Parts</h4>The parts of a solar system include the sun, planets, moons, asteroids, and comets. The sun is the star at the center of the system, and the planets orbit around it. The planets are divided into two categories: terrestrial planets and gas giants. Terrestrial planets are small and have solid surfaces. Gas giants are large and have gaseous surfaces. The moons are small bodies that orbit around the planets. The asteroids are small, rocky bodies that orbit around the sun. The comets are small, icy bodies that orbit around the sun.<h4>Types</h4>There are two types of solar systems: open systems and closed systems. Open systems are systems that are still forming. Closed systems are systems that have stopped forming.<h4>Students will be able to</h4>- Students will be able to describe the definition of a solar system.<br/>- Students will be able to explain the parts of a solar system.<br/>- Students will be able to describe the types of solar systems. ### Task: Create an informational handout for my 3rd grade students about fractions<h1>Handout should cover</h1>- Denominators<br/>- Numerators <br/>- Adding Fractions <br/>- Subtracting Fraction<h3>Handout</h3><h4>Introduction</h4>Fractions are a way of representing parts of a whole. A fraction has two parts: a numerator and a denominator. The numerator is the number of parts, and the denominator is the total number of parts. For example, if there are four parts, and you want to represent two of those parts, you would use the fraction 2/4.<h4>Denominators</h4>The denominator is the bottom number in a fraction. It represents the total number of parts. For example, in the fraction 2/4, the denominator is 4. This means that there are four parts in total.<h4>Numerators</h4>The numerator is the top number in a fraction. It represents the number of parts that you have. For example, in the fraction 2/4, the numerator is 2. This means that you have two parts.<h4>Adding Fractions</h4>To add fractions, you need to find a common denominator. This is the lowest number that both denominators will go into. For example, if you're adding the fractions 1/2 and 1/4, you would find a common denominator of 4. This means that the denominators would be 2 and 4. To add the fractions, you would add the numerators and write the sum over the common denominator. So, 1/2 + 1/4 would be 3/4.<h4>Subtracting Fractions</h4>To subtract fractions, you need to find a common denominator. This is the lowest number that both denominators will go into. For example, if you're subtracting the fractions 1/2 and 1/4, you would find a common denominator of 4. This means that the denominators would be 2 and 4. To subtract the fractions, you would subtract the numerators and write the difference over the common denominator. So, 1/2 - 1/4 would be 1/4.<h4>Students will be able to</h4>- Students will be able to describe fractions.<br/>- Students will be able to explain denominators.<br/>- Students will be able to explain numerators.<br/>- Students will be able to add fractions.<br/>- Students will be able to subtract fractions. ### Task: Create an informational handout for my ${gradeLevel} students about ${subject}`,
        temperature: 0.7,
        max_tokens: 1200,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: [' ###'],
      }),
    });
    const json = await response.json();
    setCompletion(json.choices[0].text);
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (!subject) {
      displayAlert();
      return;
    }
    fetchApi(subject, gradeLevel);
  };

  return (
    <Wrapper>
      <Card
        sx={{
          width: '100%',
          maxWidth: '100%',
          border: 'none',
          boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.15)',
          borderRadius: '5px',
          height: '100%',
          '&:hover': {
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
          },
        }}
        className="input-card"
      >
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="form-center">
              <h4>Informational Handout Generator 📝</h4>
              <FormRow
                type="text"
                labelText="Subject or lesson to generate handout for:"
                name="subject"
                value={subject}
                handleChange={e => setSubject(e.target.value)}
              />
              <FormRow
                type="text"
                labelText="Grade Level:"
                name="gradeLevel"
                value={gradeLevel}
                handleChange={e => setGradeLevel(e.target.value)}
              />
              <button
                className="btn btn-block"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Please Wait...' : 'Generate Handout'}
              </button>
            </div>
          </form>
          <div className="bodyText">
            <h5>
              Save time and quickly draft structured informational handouts for
              any subject matter or lesson plan.
            </h5>
            <p>
              ✅ Great for preparing the class with information about the day's
              lesson.
              <br />✅ Feel free to be granular with details, or let the AI do
              it for you!
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="editor">
        <CKEditor
          editor={Editor}
          data={completion}
          onchange={(event, editor) => {
            const data = editor.setData('hello world');
            setText(data);
          }}
        ></CKEditor>
      </div>
    </Wrapper>
  );
};

export default InformationalHandout;
