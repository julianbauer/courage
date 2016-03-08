import './index.styl';
import React from 'react';

export default class Stories extends React.Component {

	render() {

		var storyImage1 = require('../../assets/images/quinta.jpg')
		var storyImage2 = require('../../assets/images/nashorn.jpg')

    var storyImageStyle1 = {
      backgroundImage: 'url(' + storyImage1 + ')'
    }

		var storyImageStyle2 = {
      backgroundImage: 'url(' + storyImage2+ ')'
    }

		return (
			<div>
				<article className="story">
          <div className="story-content">
            <h1>Das ist Quinta, ...</h1>
            <p>
              Sie ist schon zum 3. Mal dabei und ihr Faible für Pink ist unübersehbar. Die Hilfsgüter, der Transport der Kinder sowie die Verpflegung und Versorgung kann anders nicht gewährt werden.<br/>
Durch ein wenig Geben kann so viel erreicht werden, die Jugendlichen opfern ihre Zeit auf und empfangen so viel dafür, ihnen das zu ermöglichen und vor allem Afrikanischen Kranken einmal in ihrem Leben wirkliche Ferien zu ermöglichen, dazu kann jeder beisteuern! Courage!
            </p>
          </div>
          <div className="story-image" style={storyImageStyle1}></div>
				</article>

				<article className="story">
          <div className="story-content">
            <h1>Elefanten, Büffel und Nashörner</h1>
            <p>
              Die Hilfsgüter, der Transport der Kinder sowie die Verpflegung und Versorgung kann anders nicht gewährt werden.<br/>
Durch ein wenig Geben kann so viel erreicht werden, die Jugendlichen opfern ihre Zeit auf und empfangen so viel dafür, ihnen das zu ermöglichen und vor allem Afrikanischen Kranken einmal in ihrem Leben wirkliche Ferien zu ermöglichen, dazu kann jeder beisteuern! Courage!            </p>
          </div>
          <div className="story-image" style={storyImageStyle2}></div>
				</article>

			</div>
		)
	}
}
