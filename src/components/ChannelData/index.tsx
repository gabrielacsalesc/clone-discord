import React, {useRef, useEffect} from "react";
import ChannelMessage, { Mention } from "../ChannelMessage";
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const div = messagesRef.current;

    if (div !== null && div !== undefined){
        div.scrollTop = div.scrollHeight;
    }
  },[messagesRef])
  
  return (
    <Container>
      <Messages>
        {Array.from(Array(300).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Gabriela Coutinho"
            date="30/06/2022"
            content="Hoje é dia de aprender Props e Component"
          />
          ))}
        <ChannelMessage
          author="Diego Fernandes"
          date="30/06/2022"
          content={
            <>
              <Mention>@gabrielacoutinho</Mention>, hoje é dia de aprender Props
              e Component clonando o discord
            </>
          }
          hasMention
          isBot
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
