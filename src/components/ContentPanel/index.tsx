import { PropsWithChildren } from 'react';

import './ContentPanel.scss';

const ContentPanel = ({ children }: PropsWithChildren) => <section className="ContentPanel">{children}</section>;

export default ContentPanel;
