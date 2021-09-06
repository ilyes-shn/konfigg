import React from "react";
import styles from "../styles/cards.module.css";
import { Button } from '@material-ui/core'

const Cards = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <table>
          <tbody>
            <tr>
              <td>
                <h2>Starter</h2>
              </td>
            </tr>
            <tr>
              <td>
                Advanced features and support for building pilot projects or
                small sites.
              </td>
            </tr>
            <tr>
              <td>
                <h3>Free to get started</h3>
              </td>
            </tr>
            <tr>
              <td>Automated builds from Git</td>
            </tr>
            <tr>
              <td>Deploy to global Edge network</td>
            </tr>
            <tr>
              <td>
                Live site previews with a collaboration UI for team members
              </td>
            </tr>
            <tr>
              <td>Instant rollbacks to any version</td>
            </tr>
            <tr>
              <td>
                {`Deploy static assets & dynamic
serverless functions`}
              </td>
            </tr>
            
          </tbody>
          <Button
            variant="contained"
            color="primary"
            style={{ width: "max-content", marginTop: '10px' }}
          >
            Start for free
          </Button>
        </table>
      </div>
      <div className={styles.card}>
        <table>
          <tbody>
            <tr>
              <td>
                <h2>Pro</h2>
              </td>
            </tr>
            <tr>
              <td>
                Advanced features and support for building pilot projects or
                small sites.
              </td>
            </tr>
            <tr>
              <td>
                <h3>&#8364;350.00 / month</h3>
              </td>
            </tr>
            <tr>
              <td>Starter features, plus:</td>
            </tr>
            <tr>
              <td>Background Functions</td>
            </tr>
            <tr>
              <td>
              Password-protected sites
              </td>
            </tr>
            <tr>
              <td>Audit logs with 7-day history</td>
            </tr>
            <tr>
              <td>
              {`4× bandwidth & 3× build minutes`}
              </td>
            </tr>
            <tr><td>Shared environment variables</td></tr>
            <tr><td>{`Slack & email notifications`}</td></tr>
            <tr><td>Email support</td></tr>
          </tbody>
          <Button
            variant="contained"
            color="primary"
            style={{ width: "max-content", marginTop: '10px' }}
          >
            Buy Pro
          </Button>
        </table>
      </div>
      <div className={styles.card}>
        <table>
          <tbody>
            <tr>
              <td>
                <h2>Business</h2>
              </td>
            </tr>
            <tr>
              <td>
                Advanced features and support for building pilot projects or
                small sites.
              </td>
            </tr>
            <tr>
              <td>
                <h3>&#8364;350.00 / month</h3>
              </td>
            </tr>
            <tr>
              <td>Pro features, plus:</td>
            </tr>
            <tr>
              <td>SAML single sign-on</td>
            </tr>
            <tr>
              <td>
              Role-based access control
              </td>
            </tr>
            <tr>
              <td>Audit logs with full history</td>
            </tr>
            <tr>
              <td>
                {`Unlimited Forms, Identity, & Functions`}
              </td>
            </tr>
            <tr><td>Unlimited Analytics for all sites</td></tr>
            <tr><td>Prioritize time-sensitive builds</td></tr>
            <tr><td>Billing administrator role</td></tr>
            <tr><td>Self-hosted GitHub/GitLab</td></tr>
          </tbody>
          <Button
            variant="contained"
            color="primary"
            style={{ width: "max-content", marginTop: '10px' }}
          >
           Buy Business
          </Button>
        </table>
      </div>
      <div className={styles.card}>
        <table>
          <tbody>
            <tr>
              <td>
                <h2>Enterprise</h2>
              </td>
            </tr>
            <tr>
              <td>
                Advanced features and support for building pilot projects or
                small sites.
              </td>
            </tr>
            <tr>
              <td>
                <h3>&#8364;350/ month</h3>
              </td>
            </tr>
            <tr>
              <td>99.99% uptime SLA</td>
            </tr>
            <tr>
              <td>24×7×365 premium support</td>
            </tr>
            <tr>
              <td>
              Enterprise-grade global edge network
              </td>
            </tr>
            <tr>
              <td>High-performance builds with SLAs</td>
            </tr>
            <tr>
              <td>
                {`Custom contracts & invoicing`}
              </td>
            </tr>
            <tr><td>{`Security & compliance review`}</td></tr>
            <tr><td>Pentesting and load testing</td></tr>
          </tbody>
          <Button
            variant="contained"
            color="primary"
            style={{ width: "max-content", marginTop: '10px' }}
          >
            Contact us
          </Button>
        </table>
      </div>

    </div>
  );
};

export default Cards;
