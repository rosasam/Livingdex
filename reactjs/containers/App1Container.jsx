import React from "react"
import Headline from "../components/Headline"
import Pokemon from "../components/Pokemon"

export default class App1Container extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      pokemons: [],
    }
  }

  queryDataFromServer(success) {
    $.ajax({
      type: "POST",
      url: "pokemons",
      data: JSON.stringify(requestParams),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: (response) => success(response)
    })
  }

  setData(response) {
    if (response.success) {
      this.setState({
        pokemons: response,

      })
    } else {
      console.error(`Bad response when receiving new table data: ${response}`)
    }
  }


  render() {
    return (
          <div>
            <div className="icon">
              <Headline>Hello there</Headline>
            </div>
            <div className="pc-box-container">
              <div className="pc-box-name">001-030</div>
              <div className="pc-box">
                <Pokemon></Pokemon>
                <Pokemon></Pokemon>
                <Pokemon></Pokemon>
                <Pokemon></Pokemon>
                <Pokemon></Pokemon>
                <Pokemon></Pokemon>
                  <Pokemon></Pokemon>
                  <Pokemon></Pokemon>
                  <Pokemon></Pokemon>
                  <Pokemon></Pokemon>
                  <Pokemon></Pokemon>
                  <Pokemon></Pokemon>
                    <Pokemon></Pokemon>
                    <Pokemon></Pokemon>
                    <Pokemon></Pokemon>
                    <Pokemon></Pokemon>
                    <Pokemon></Pokemon>
                    <Pokemon></Pokemon>
                      <Pokemon></Pokemon>
                      <Pokemon></Pokemon>
                      <Pokemon></Pokemon>
                      <Pokemon></Pokemon>
                      <Pokemon></Pokemon>
                      <Pokemon></Pokemon>
                        <Pokemon></Pokemon>
                        <Pokemon></Pokemon>
                        <Pokemon></Pokemon>
                        <Pokemon></Pokemon>
                        <Pokemon></Pokemon>
                        <Pokemon></Pokemon>
              </div>
            </div>
          </div>
    )
  }
}
