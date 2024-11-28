#!/usr/bin/env node

import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function typeWriterEffect(text, callback) {
  let i = 0;
  function type() {
    if (i < text.length) {
      process.stdout.write(text.charAt(i));
      i++;
      setTimeout(type, 20);
    } else if (callback) {
      callback();
    }
  }
  type();
}

function waitForEnter(callback) {
  process.stdout.write("\nPress Enter to continue... ");
  rl.question("", () => {
    callback();
  });
}

console.clear();
const introText =
  "❤‍🩹 Hey there, Ayushi ❤‍🩹\nBefore we continue... how about you answer this.";
typeWriterEffect(introText, () => {
  waitForEnter(() => {
    rl.question(
      "\nDo you know how much you're loved, princess? (yes/no): ",
      (answer) => {
        console.clear();
        let questionText = "";
        if (answer.toLowerCase() === "yes") {
          questionText =
            "\n❤‍🩹 Of course, you do! But let me remind you anyway... ❤‍🩹";
        } else {
          questionText = "\nLet me tell you then... ❤‍🩹";
        }
        typeWriterEffect(questionText, continueAfterQuestion);
      }
    );
  });
});

function continueAfterQuestion() {
  waitForEnter(() => {
    console.clear();
    const loveMessage = `
        ❤‍🩹 You're my everything.
        ❤‍🩹 You light up my world in ways words can't describe.
        ❤‍🩹 I'm so grateful to have you in my life.

        I love you. <3

        Remember, no matter what, you are deeply loved. Always and forever. <3
    `;
    typeWriterEffect(loveMessage, continueAfterMessage);
  });
}

function continueAfterMessage() {
  waitForEnter(() => {
    console.clear();
    const longParagraph =
      "\x1b[1m\x1b[3m" +
      `
"And maybe, if only she could see herself the way I see her, she’d understand the depths of what she means to me. 
If she could feel the way she feels in my arms—the quiet weight that settles over me when I’m holding her—she’d know that every small sacrifice, every length I’ve gone and would go, is woven into that embrace. 
She’d see herself through the details I cherish: her resilience and her vulnerability, the hopeful spark in her eyes, the tender way her dreams linger on her lips even when they’re too fragile to be spoken. 
She’d understand that every contradiction she wrestles with—her need to be independent, her hidden longing to be held, her fearless ambition softened by those quiet fears—these are the things that make her achingly, impossibly beautiful. 
Maybe she’d fall in love with herself the way I deeply have, with a reverence born not from perfection, but from the depth, the strength, the hope, and the light she brings just by being herself. ❤‍🩹🫶🏻"
    ` +
      "\x1b[0m";
    typeWriterEffect(longParagraph, () => {
      waitForEnter(() => {
        console.clear();

        const endingMessage = `sooooooooooooooooooooooooo, how was itttttttttttttttttttttttt <3 🫶🏻`;
        typeWriterEffect(endingMessage, () => {
          waitForEnter(() => {
            rl.close();
          });
        });
      });
    });
  });
}
