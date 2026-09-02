import React from 'react';

interface State {
  error: Error | null;
}

/** SYS-09: упавшая WebGL-сцена не имеет права показывать белый экран. */
export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('[STUDIO OS] ErrorBoundary:', error.message, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="container" style={{ paddingBlock: 'var(--space-64)' }}>
          <h2>Сцена упала — статический режим</h2>
          <p>Заявка работает: приложите задачу письмом, диспетчер перезвонит. ({String(this.state.error.message).slice(0, 120)})</p>
        </div>
      );
    }
    return this.props.children;
  }
}
