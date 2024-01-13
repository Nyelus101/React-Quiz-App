  /*const [name, setName] = useState("");
  const [highScores, setHighScores] = useState([]);
  const [showScores, setShowScores] = useState(false);

  useEffect(() => {
    setHighScores(JSON.parse(localStorage.getItem("highScores")) || []);
  }, []);

  const handleSave = () => {
    const score = {
      name: name,
      score: result.score,
    };

    const newHighScores = [...highScores, score].sort((a, b) => b.score - a.score);
    setHighScores(newHighScores);
    setShowScores(true);
    localStorage.setItem("highScores", JSON.stringify(newHighScores));
  };*/



        {/*{!showScores ? 
       <>
       <h4>Enter your name below <br /> to save your score!</h4>
       <input
         placeholder="Your name "
         value={name}
         onChange={(evt) => setName(evt.target.value)}
       />
       <button onClick={handleSave}>Save</button>
       </> : 
     <>
    <table>
      <thead>
        <tr>
          <th>Ranking</th>
          <th>Name</th>
          <th>Score</th>
        </tr>
        <tbody>
          {highScores.map((highScore, i) => {
            return (
            <tr key={`${highScore.score}${highScore.name}${i}`}>
              <td>{i + 1}</td>
              <td>{highScore.name}</td>
              <td>{highScore.score}</td>
            </tr>
            )
          })}
          
        </tbody>
      </thead>
    </table>
     </>
      }*/}