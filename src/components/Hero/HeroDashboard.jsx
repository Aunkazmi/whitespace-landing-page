import './Hero.css'

export default function HeroDashboard() {
  return (
    <div className="hero-visual">
      <div className="hero-glow" />

      <div className="floating-card floating-card-top">
        <span className="floating-icon">✓</span>
        <div>
          <strong>Project on track</strong>
          <small>Everything is looking good</small>
        </div>
      </div>

      <div className="floating-card floating-card-bottom">
        <strong>+28%</strong>
        <span>productivity</span>
      </div>

      <div className="browser-window">
        <div className="browser-top">
          <div className="browser-dots">
            <span />
            <span />
            <span />
          </div>

          <div className="browser-address">app.whitespace.io</div>

          <div className="browser-user">AS</div>
        </div>

        <div className="dashboard-layout">
          <aside className="dashboard-sidebar">
            <div className="sidebar-logo">
              <span>W</span>
            </div>

            <div className="sidebar-menu">
              <div className="sidebar-item active">
                <span>⌂</span>
                <small>Overview</small>
              </div>
              <div className="sidebar-item">
                <span>□</span>
                <small>Projects</small>
              </div>
              <div className="sidebar-item">
                <span>✓</span>
                <small>Tasks</small>
              </div>
              <div className="sidebar-item">
                <span>◌</span>
                <small>Team</small>
              </div>
            </div>
          </aside>

          <div className="dashboard-main">
            <div className="dashboard-heading">
              <div>
                <span className="dashboard-label">MONDAY, SEPTEMBER 2</span>
                <h3>Good morning, Aun.</h3>
              </div>
              <div className="dashboard-avatar">A</div>
            </div>

            <div className="metric-grid">
              <div className="metric-card">
                <span>Active projects</span>
                <strong>12</strong>
                <small>↑ 18% this month</small>
              </div>

              <div className="metric-card">
                <span>Completed</span>
                <strong>84</strong>
                <small>↑ 24% this month</small>
              </div>

              <div className="metric-card">
                <span>Team focus</span>
                <strong>92%</strong>
                <small>Excellent</small>
              </div>
            </div>

            <div className="dashboard-content">
              <div className="chart-card">
                <div className="chart-header">
                  <div>
                    <span>Weekly progress</span>
                    <strong>+32.4%</strong>
                  </div>
                  <small>Last 7 days</small>
                </div>

                <div className="chart">
                  <div className="chart-line">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="chart-bars">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>

              <div className="tasks-card">
                <div className="tasks-header">
                  <span>Today's focus</span>
                  <small>4 tasks</small>
                </div>

                <div className="task">
                  <span className="task-check checked">✓</span>
                  <div>
                    <strong>Finalize landing page</strong>
                    <small>Design</small>
                  </div>
                </div>

                <div className="task">
                  <span className="task-check">○</span>
                  <div>
                    <strong>Review product roadmap</strong>
                    <small>Product</small>
                  </div>
                </div>

                <div className="task">
                  <span className="task-check">○</span>
                  <div>
                    <strong>Team standup</strong>
                    <small>Today · 10:30</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
