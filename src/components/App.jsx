import React from "react";
import Heading from "./Heading";
import EmojiInfo from "./EmojiInfo";
import emojipedia from "../emojipedia";



function App() {
    return (
        <div>
            <Heading name="Emojipedia" />
            <dl className="dictionary" > {
                emojipedia.map(emoji =>
                    <EmojiInfo key={
                        emoji.id
                    }
                        emojiName={
                            emoji.name
                        }
                        image={
                            emoji.emoji
                        }
                        emojiDescription={
                            emoji.meaning
                        }
                    />)}
            </dl>
        </div>
    );
}

export default App;