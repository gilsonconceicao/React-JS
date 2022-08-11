const EventsButton = () => {
    const hundleClickMessage = () => {
        alert('Botão foi clicado com sucesso.')
    }
    const returnJSX = () => {
        return <p>Essa foi a função retornada. Nas funções comum também podem tem JSX</p>
    }
    return (
        <div>
            <button onClick={hundleClickMessage}>Clique aqui</button>
            <p>{returnJSX()}</p>
        </div>
    )
}

export default EventsButton;