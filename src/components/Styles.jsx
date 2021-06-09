import styled from 'styled-components'

const Container = styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    flex-flow: column wrap;
`

const Flash = styled.figure`
    background-color: white;
    border-radius: 50%;
    height: 5vw;
    width: 5vw;
    filter: blur(30px);

    position: absolute;
    right: 0;
    animation: float infinite 2s normal linear;

    @keyframes float {
    0% {
        filter: opacity(0) blur(10px)
    }
    1%{
        filter: opacity(1) blur(10px)
    }
    80% {
        transform: translateY(25vh)
    }
    81% {
        filter: opacity(0) blur(10px)
    }
    100% {
        filter: opacity(0) blur(10px)
    }
    }
`

const ControlConsole = styled.section`
    width: 20%;
    height: 100%;

    display: flex;
    flex-flow: column wrap;
    align-items: center;

    background-color: red;
`

const ControlButtons = styled.figure`
    width: 100%;
    height: 25%;

    display: flex;
    flex-flow: column wrap;
    align-items: center;

    background-color: cyan;

    div {
        width: 100%;
        height: 87%;

        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;

        font-size: 4rem;

        span {
            height: 100%;
            width: 33.33%;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 1px black solid;
        }
    }
`

export { Container, Flash, ControlConsole, ControlButtons }