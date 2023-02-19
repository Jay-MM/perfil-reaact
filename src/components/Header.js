import Typewriter from 'typewriter-effect'

const Header = () => {
    return (
        <Typewriter
        options={{
          strings: [
            'Hello World','I am a FULL-STACK Web Developer', 'I love to code!'
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 9,
        }}
      />
    )
}
export default Header