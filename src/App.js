import axios from "axios";
import {useState} from "react";
import {makeStyles} from "@mui/material/styles";
import {Box, Button, TextField} from "@mui/material";



function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8080/chat", {prompt});
    setResponse(res.data);
  }
  return (
      <Box display="flex" justifyContent="center">
        <form className="form" onSubmit={handleSubmit}>
            <TextField
                variant="filled"
                color="primary"
                id="outlined-textarea"
                sx={{background: "#fff"}}
                label="Your message:"
                multiline
                maxRows={20}
            />
            <Button onClick={handleSubmit} size="large" sx={{height: 55}} type="submit" variant="contained">Send</Button>
        </form>
        <p className="response">{response}</p>
      </Box>
  );
}

export default App;
