import React from 'react';
import { createPortal, } from 'react-dom';
import { Modal, Button, Spinner, } from 'react-bootstrap'

/** usage：<Dialog ref={(el) => { this.dialog = el }} />
  *  ① this.dialog.waiting('loading...')
  *  ② this.dialog.alert('Save success!')
  *  ③ this.dialog.confirm('The Wi-Fi module will be restart, it will cause the Wi-Fi disconnection.',() => {
          console.log('Click Ok Button')
        })
  *  ④ this.dialog.close()
 */

let confirmOkFn = null

class Dialog extends React.Component {
  constructor() {
    super(...arguments);

    const doc = window.document;
    this.node = doc.createElement('div');
    doc.body.appendChild(this.node);

    this.alert = this.alert.bind(this)
    this.waiting = this.waiting.bind(this)
    this.confirm = this.confirm.bind(this)
    this.handleOkFn = this.handleOkFn.bind(this)
    this.close = this.close.bind(this)

    this.state = {
      type: '', // waiting || alert || confirm
      show: false,
      content: '',
      size: '',
      nofooter: false,
    }
  }

  componentWillUnmount() {
    window.document.body.removeChild(this.node);
  }

  waiting(content) {
    this.setState({
      type: 'waiting',
      show: true,
      content,
    })
  }

  alert(content, param, fn) {
    param = param || {}
    this.setState({
      type: 'alert',
      show: true,
      size: param.size || 'sm',
      content,
      nofooter: param.nofooter || false,
    })
    confirmOkFn = fn
  }

  confirm(content, fn) {
    this.setState({
      type: 'confirm',
      show: true,
      size: 'md',
      content,
    })
    confirmOkFn = fn
  }

  handleOkFn() {
    if (confirmOkFn) confirmOkFn()
    this.setState({
      show: false,
    })
  }

  close() {
    this.setState({
      show: false,
    })
  }

  render() {
    const { show, type, content, size, nofooter,} = this.state
    return createPortal(
      <div className="dialog">
        {
          type === 'waiting' ? (
            <Modal show={show} size="sm">
              <Modal.Body>
                <Spinner animation="border" size="md" variant="info"/>&nbsp;
                {content || 'Waiting...'}
              </Modal.Body>
            </Modal>
          ) : (
            <Modal onHide={() => { }} show={show} size={size}>
              {type === 'alert' ? '' : (
                <Modal.Header closeButton>
                  <Modal.Title>Confirm</Modal.Title>
                </Modal.Header>)
              }
              <Modal.Body>
                <div dangerouslySetInnerHTML={{__html: content,}} style={{ textAlign: 'center', marginTop: (type === 'alert' ? '15px' : '0'), }} />
              </Modal.Body>
              {
                !nofooter ? (
                  <Modal.Footer>
                    {type === 'alert' ? (<Button onClick={this.handleOkFn}>OK</Button>) : (
                      <>
                        <Button onClick={this.handleOkFn}>Ok</Button>
                        <Button onClick={() => { this.setState({ show: false, }) }}>Cancel</Button>
                      </>
                    )}
                  </Modal.Footer>
                ) : ''
              }
            </Modal>
          )
        }
      </div>,
      this.node
    );
  }
}

export default Dialog