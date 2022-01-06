import Message from './message'

const MESSAGE_NAME : String = "React+Typescript+Webpack Boilerplate"
const MESSAGE : String = "It works!"

export default function App()
{
	console.log( 'HERE' )
	return <Message msg = { MESSAGE } msg_name = { MESSAGE_NAME } text_color = '#338aff'/>
}
