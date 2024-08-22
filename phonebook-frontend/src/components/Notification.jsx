const Notification = ({ notification }) => {
    if (notification === null) {
      return null
    }
  
    let notificationStyle = {
      background: 'lightgrey',
      fontSize: '20px',
      borderStyle: 'solid',
      borderRadius: '5px',
      padding: '10px',
      marginBottom: '10px'
    }

    if (notification.isSuccess) {
      notificationStyle.color = 'green'
    }
    else{
       notificationStyle.color = 'red'
    }

    return (
      <div style={notificationStyle}>
        {notification.message}
      </div>
    )
  }

export default Notification