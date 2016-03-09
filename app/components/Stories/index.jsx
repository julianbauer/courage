import './index.styl';
import React from 'react';
import Relay from 'react-relay';

export class Stories extends React.Component {

	render() {

    console.log(this.props.viewer);

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
        {this.props.viewer.allStorys.edges.map((node) => (
          <article className="story">
            <div className="story-content">
              <h1>{node.title}</h1>
              <p>{node.content}</p>
            </div>
            <div className="story-image" style={storyImageStyle1}></div>
          </article>
          ))
        }
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

export default Relay.createContainer(Stories, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        allStorys(first: 2) {
          edges {
            node {
              title
              content
            }
          }
        }
      }
    `,
  },
})
