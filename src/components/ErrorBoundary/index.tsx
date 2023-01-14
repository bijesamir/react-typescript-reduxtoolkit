import { Component, ErrorInfo, ReactNode } from 'react';
import styled from 'styled-components';
import { refresh as refreshIcon } from '../resources/icons';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export const Circle = styled.div`
  width: 60px;
  height: 60px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.3);
  background-color: #2f2f2f;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  margin: 0.5rem;
  color: white;
  font-size: 3em;
`;

const RefreshButtonContainer = styled.div`
  position: absolute;
  right: 22px;
  bottom: 22px;
`;

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <h1 style={{ color: 'white' }}>
              申し訳ありません、読み込み中にエラーが発生しました。画面右下の更新ボタンを押してください。
            </h1>
          </div>
          <RefreshButtonContainer>
            <Circle onClick={() => window.location.reload()}>
              <img src={refreshIcon} alt='Refresh'></img>
            </Circle>
          </RefreshButtonContainer>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
