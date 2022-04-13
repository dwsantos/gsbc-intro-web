    function towel() {
     var answer = window.prompt("What gets wetter as it dries? (Warning: Text is Case Sensitive. Please Use All Lowercase Letters) Enter your answer:")
        if (answer.toLowerCase() == "towel" || answer.toLowerCase() == "a towel") {
            window.location.replace("https://dwsantos.github.io/gsbc-intro-web/hw3/room1.html");
        }
        else{
            alert("Wrong answer. (Hint: answer is case sensitive. Please use all lowercase letters.) Try again. ");
    }
}
    function incorrect() {
     var answer = window.prompt("(Warning: Text is Case Sensitive. Please Use All Lowercase Letters) Enter your answer: ")

        if (answer == "incorrect" || answer == "Incorrect" || answer == "INCORRECT") {
            window.location.replace("https://dwsantos.github.io/gsbc-intro-web/hw3/room4.html");
        }
        else{
            alert("Wrong answer. (Hint: answer is case sensitive. Please use all lowercase letters.) Try again. ");
    }
}
    function placeholder() {
     var answer = window.prompt("(Warning: Text is Case Sensitive. Please Use All Lowercase Letters) Enter your answer: ")

        if (answer == "placeholder" || answer == "a placeholder" || answer == "A Placeholder") {
            window.location.replace("https://dwsantos.github.io/gsbc-intro-web/hw3/room7.html");
        }
        else{
            alert("Wrong answer. (Hint: answer is case sensitive. Please use all lowercase letters.) Try again. ");
    }
}
    function test() {
     var answer = window.prompt("(Warning: Text is Case Sensitive. Please Use All Lowercase Letters) Enter your answer: ")

        if (answer == "test" || answer == "a test" || answer == "A Test") {
            window.location.replace("https://dwsantos.github.io/gsbc-intro-web/hw3/room9.html");
        }
        else{
            alert("Wrong answer. (Hint: answer is case sensitive. Please use all lowercase letters.) Try again. ");
    }
}
    function finalQ() {
     var answer = window.prompt("(Warning: Text is Case Sensitive. Please Use All Lowercase Letters) Enter your answer: ")

        if (answer == "Jesus" || answer == "a Jesus" || answer == "A Jesus") {
            window.location.replace("https://dwsantos.github.io/gsbc-intro-web/hw3/index.html");
        }
        else{
            alert("Wrong answer. (Hint: answer is case sensitive. Please use all lowercase letters.) Try again. ");
    }
}
function userList(){
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h3",
        null,
        "List The Answers to the Previous Riddles"
      ),
      React.createElement(TodoList, { items: this.state.items }),
      React.createElement(
        "form",
        { onSubmit: this.handleSubmit },
        React.createElement(
          "label",
          { htmlFor: "new-todo" },
          "What needs to be done?"
        ),
        React.createElement("input", {
          id: "new-todo",
          onChange: this.handleChange,
          value: this.state.text
        }),
        React.createElement(
          "button",
          null,
          "Add #",
          this.state.items.length + 1
        )
      )
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return React.createElement(
      "ul",
      null,
      this.props.items.map(item => React.createElement(
        "li",
        { key: item.id },
        item.text
      ))
    );
  }
}

    root.render(React.createElement(TodoApp, null));
}
