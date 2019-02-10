// Node Modules
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class OfflineShield extends PureComponent {

  state = {
    isOnline: navigator.onLine,
  };


  onConnectionChanged = () => {
    const { onOffline, onOnline } = this.props;

    const isOnline = navigator.onLine;
    this.setState({ isOnline }, () => {
      if (isOnline && typeof onOnline === 'function') {
        onOnline();
      } else if (!isOnline && typeof onOffline === 'function') {
        onOffline();
      }
    });
  };


  componentDidMount() {
    this.unlistenConnectionChanges = makeConnectionListener(this.onConnectionChanged);
  }

  componentWillUnmount() {
    this.unlistenConnectionChanges();
  }


  render() {
    const { onOfflineRender, children } = this.props;
    const { isOnline } = this.state;

    if (isOnline) {
      return children;
    }

    if (!isOnline && typeof onOfflineRender === 'function') {
      return onOfflineRender();
    }

    return (
      <div>
        You are offline.
      </div>
    );
  }

}


OfflineShield.propTypes = {
  onOfflineRender: PropTypes.func,
  onOffline: PropTypes.func,
  onOnline: PropTypes.func,
};


const makeConnectionListener = (onEventFire) => {
  window.addEventListener('online', onEventFire);
  window.addEventListener('offline', onEventFire);

  return () => {
    window.removeEventListener('online', onEventFire);
    window.removeEventListener('offline', onEventFire);
  };
};


export default OfflineShield;
