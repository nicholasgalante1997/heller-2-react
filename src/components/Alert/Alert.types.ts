export interface AlertProps {
  severity: Severity;
  message: {
    heading: string;
    body: string;
  };
  dismissable?: boolean;
  onDismiss?: () => void;
}

type Severity = 'info' | 'warning' | 'error' | 'success';
