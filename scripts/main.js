var data = [
    {
        id: 1,
        title: "",
        text: "Есть ли у вашей компении патенты, защищающие товар от копирования?",
        responseOptions: [
            {
                id: 1,
                value: "Да",
                conclusion: "У вашей компении патенты, защищающие товар от копирования."
            },
            {
                id: 2,
                value: "Нет",
                conclusion: "у вашей компении отсутствуют патенты, защищающие товар от копирования."
            }
        ]
    },
    {
        id: 2,
        title: "",
        text: "Может ли компания **быстро** приспосабливаться к новым рыночным реалиям?",
        responseOptions: [
            {
                id: 0,
                value: "Да",
                conclusion: "Компания может быстро приспосабливаться к новым рыночным реалиям."
            },
            {
                id: 2,
                value: "Нет",
                conclusion: "Компания не может быстро приспосабливаться к новым рыночным реалиям."
            }
        ]
    },
    {id: 3, title: "", text: "Оцените **скорость** обслуживания", responseOptions: [{id: 0, value: 1}, {id: 2, value: 2}, {id: 3, value: 3}, {id: 4, value: 4}, {id: 5, value: 5}] },
    {id: 4, title: "", text: "Оцените **квалификацию** персонала", responseOptions: [{id: 0, value: 1}, {id: 2, value: 2}, {id: 3, value: 3}, {id: 4, value: 4}, {id: 5, value: 5}] },
    {id: 5, title: "", text: "Оцените **качество** обслуживания", responseOptions: [{id: 0, value: 1}, {id: 2, value: 2}, {id: 3, value: 3}, {id: 4, value: 4}, {id: 5, value: 5}] }
];

var Question = React.createClass({
    rawMarkup: function() {
        var md = new Remarkable();
        var rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    },
    render: function() {
        var responseOptions = this.props.responseOptions.map(function(responseOption) {
            return (
                <option value={responseOption.value} key={responseOption.id}>
                {responseOption.value}
                </option>
            );
        });
        return (
            <div className="question well well-sm form-group row">
                <div className="col-sm-10">
                    <span dangerouslySetInnerHTML={this.rawMarkup()} />
                </div>
                <div className="col-sm-2">
                    <select className="form-control" id="sel1">
                        {responseOptions}
                    </select>
                </div>
            </div>
        );
    }
});

var QuestionList = React.createClass({
  render: function() {
    var questionNodes = this.props.data.map(function(question) {
      return (
        <Question title={question.title} key={question.id} responseOptions={question.responseOptions}> 
          {question.text}
        </Question>
      );
    });
    return (
      <div className="questionList">
        {questionNodes}
      </div>
    );
  }
});

var QuizBox = React.createClass({
  render: function() {
    return (
      <div className="questionnaireBox">
        <div className="page-header">
            <h1>SWOT Quiz</h1>
        </div>
        <QuestionList  data={this.props.data} />
      </div>
    );
  }
});

ReactDOM.render(
  <QuizBox data={data}/>,
  document.getElementById('quiz')
);
