import { useState, useEffect } from "react";

const API_URL = "http://localhost:5000/api";

/* ── Icon ── */
const Icon = ({ d, size = 24, sw = 2 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={sw}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {(Array.isArray(d) ? d : [d]).map((p, i) =>
      p.includes(",") && !p.startsWith("M") ? (
        <polyline key={i} points={p} />
      ) : (
        <path key={i} d={p} />
      )
    )}
  </svg>
);

const D = {
  shield: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"],
  lock: ["M7 11V7a5 5 0 0 1 10 0v4", "M3 11h18v11H3z"],
  fp: [
    "M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4",
    "M5 19.5C5.5 18 6 15 6 12c0-1.7.7-3.3 1.8-4.5",
  ],
  check: [
    "M22 11.08V12a10 10 0 1 1-5.93-9.14",
    "22 4 12 14.01 9 11.01",
  ],
};

const V = {
  accent: "#14b8a6",
  aLight: "rgba(20,184,166,0.12)",
  aBorder: "rgba(20,184,166,0.35)",

  safe: "#2dd4bf",
  danger: "#fb7185",

  card: "rgba(15,23,42,0.72)",
  border: "rgba(148,163,184,0.12)",

  muted: "rgba(226,232,240,0.62)",
  subtle: "rgba(226,232,240,0.28)",
};

function useIsMobile() {
  const [mobile, setMobile] = useState(
    window.innerWidth < 768
  );

  useEffect(() => {
    const h = () =>
      setMobile(window.innerWidth < 768);

    window.addEventListener("resize", h);

    return () =>
      window.removeEventListener(
        "resize",
        h
      );
  }, []);

  return mobile;
}

function Spin() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      style={{
        animation:
          "spin 0.75s linear infinite",
      }}
    >
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
    </svg>
  );
}

function StatCard({
  icon,
  title,
  sub,
}) {
  return (
    <div
      style={{
        background: V.card,
        border: `1px solid ${V.border}`,
        borderRadius: 22,
        padding: "28px 18px",
        textAlign: "center",
        backdropFilter: "blur(20px)",
        transition: "0.3s",
        width: "100%",
      }}
    >
      <div
        style={{
          color: V.accent,
          marginBottom: 14,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>

      <h2
        style={{
          fontSize: "42px",
          margin: 0,
          fontWeight: "800",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          marginTop: "8px",
          color: V.muted,
          fontSize: "15px",
        }}
      >
        {sub}
      </p>
    </div>
  );
}

export default function App() {
  const isMobile = useIsMobile();

  const [commitId, setCommitId] =
    useState("");

  const [deployData, setDeployData] =
    useState("");

  const [result, setResult] =
    useState(null);

  const [loadingStore, setLoadingStore] =
    useState(false);

  const [
    loadingVerify,
    setLoadingVerify,
  ] = useState(false);

  const storeHash = async () => {
    setLoadingStore(true);

    try {
      await fetch(`${API_URL}/store`, {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          commitId,
          data: deployData,
        }),
      });

      alert("Hash Stored Successfully");
    } catch (error) {
      alert("Backend Not Running");
    }

    setLoadingStore(false);
  };

  const verifyHash = async () => {
    setLoadingVerify(true);

    try {
      const response = await fetch(
        `${API_URL}/verify`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            commitId,
            data: deployData,
          }),
        }
      );

      const data =
        await response.json();

      setResult(data);
    } catch (error) {
      alert("Backend Not Running");
    }

    setLoadingVerify(false);
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",

        background:
          "radial-gradient(circle at top left, #134e4a 0%, #0f172a 45%, #020617 100%)",

        color: "white",

        fontFamily:
          "'DM Sans', sans-serif",

        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800;900&display=swap');

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        html,body,#root{
          width:100%;
          min-height:100vh;
          overflow-x:hidden;
          background:#020617;
        }

        body{
          margin:0;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        input::placeholder,
        textarea::placeholder{
          color: rgba(255,255,255,0.25);
        }

        input:focus,
        textarea:focus{
          outline:none;
          border-color:#14b8a6;
          box-shadow:0 0 0 4px rgba(20,184,166,0.15);
        }
      `}</style>

      {/* MAIN CONTAINER */}
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          padding: isMobile
            ? "20px"
            : "30px 50px",
        }}
      >
        {/* NAVBAR */}
        <nav
          style={{
            width: "100%",
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                color: V.accent,
              }}
            >
              <Icon
                d={D.shield}
                size={30}
              />
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: isMobile
                  ? "28px"
                  : "42px",
                fontWeight: "800",
              }}
            >
              TrustDeploy AI
            </h1>
          </div>

          <div
            style={{
              padding: "8px 18px",
              borderRadius: "999px",
              background: V.aLight,
              border: `1px solid ${V.aBorder}`,
              color: V.accent,
              fontSize: "13px",
              fontWeight: "700",
            }}
          >
            ● LIVE
          </div>
        </nav>

        {/* HERO SECTION */}
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns:
              isMobile
                ? "1fr"
                : "1.1fr 0.9fr",
            gap: isMobile
              ? "40px"
              : "70px",
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 22px",
                borderRadius: "999px",
                background: V.aLight,
                border: `1px solid ${V.aBorder}`,
                color: V.accent,
                fontSize: "13px",
                fontWeight: "700",
                marginBottom: "30px",
              }}
            >
              <Icon
                d={D.shield}
                size={16}
              />

              AI SECURITY PLATFORM
            </div>

            <h1
              style={{
                fontSize: isMobile
                  ? "68px"
                  : "120px",
                lineHeight: "0.9",
                fontWeight: "900",
                letterSpacing: "-4px",
              }}
            >
              Trust.
              <br />

              <span
                style={{
                  WebkitTextStroke:
                    "1.5px rgba(20,184,166,0.6)",
                  color: "transparent",
                }}
              >
                Verify.
              </span>

              <br />

              Deploy.
            </h1>

            <p
              style={{
                marginTop: "28px",
                maxWidth: "650px",
                color: "#94a3b8",
                fontSize: "22px",
                lineHeight: "1.8",
              }}
            >
              AI-powered blockchain
              trust verification for
              secure software
              deployments and supply
              chain attack detection.
            </p>
          </div>

          {/* RIGHT */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent:
                "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "620px",

                background: V.card,

                border: `1px solid ${V.border}`,

                borderRadius: "30px",

                padding: isMobile
                  ? "30px 24px"
                  : "42px",

                backdropFilter:
                  "blur(20px)",

                boxShadow:
                  "0 30px 60px rgba(0,0,0,0.45)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems:
                    "flex-start",
                  marginBottom: "24px",
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize:
                        isMobile
                          ? "42px"
                          : "60px",
                      lineHeight: "1",
                      fontWeight: "800",
                    }}
                  >
                    Deployment
                    <br />
                    Verification
                  </h2>

                  <p
                    style={{
                      marginTop:
                        "18px",
                      color:
                        "#94a3b8",
                      lineHeight:
                        "1.8",
                      fontSize:
                        "17px",
                    }}
                  >
                    Verify deployment
                    integrity instantly
                    using blockchain
                    validation.
                  </p>
                </div>

                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius:
                      "50%",
                    background:
                      V.aLight,
                    border: `1px solid ${V.aBorder}`,
                    display: "flex",
                    justifyContent:
                      "center",
                    alignItems:
                      "center",
                    color: V.accent,
                    flexShrink: 0,
                  }}
                >
                  <Icon
                    d={D.shield}
                    size={24}
                  />
                </div>
              </div>

              <div
                style={{
                  marginBottom:
                    "18px",
                }}
              >
                <label
                  style={{
                    display:
                      "block",
                    marginBottom:
                      "10px",
                    color:
                      V.subtle,
                    fontSize:
                      "12px",
                    letterSpacing:
                      "1px",
                    fontWeight:
                      "700",
                  }}
                >
                  COMMIT ID
                </label>

                <input
                  type="text"
                  placeholder="e.g. a3f2c1d8b9e7..."
                  value={commitId}
                  onChange={(e) =>
                    setCommitId(
                      e.target.value
                    )
                  }
                  style={{
                    width: "100%",
                    padding:
                      "18px",
                    borderRadius:
                      "16px",
                    border: `1px solid ${V.border}`,
                    background:
                      "rgba(0,0,0,0.25)",
                    color:
                      "white",
                    fontSize:
                      "16px",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display:
                      "block",
                    marginBottom:
                      "10px",
                    color:
                      V.subtle,
                    fontSize:
                      "12px",
                    letterSpacing:
                      "1px",
                    fontWeight:
                      "700",
                  }}
                >
                  DEPLOYMENT DATA
                </label>

                <textarea
                  rows="6"
                  placeholder="Paste deployment payload..."
                  value={deployData}
                  onChange={(e) =>
                    setDeployData(
                      e.target.value
                    )
                  }
                  style={{
                    width: "100%",
                    padding:
                      "18px",
                    borderRadius:
                      "16px",
                    border: `1px solid ${V.border}`,
                    background:
                      "rgba(0,0,0,0.25)",
                    color:
                      "white",
                    fontSize:
                      "16px",
                    resize: "none",
                  }}
                />
              </div>

              {/* BUTTONS */}
              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  marginTop: "24px",
                  flexDirection:
                    isMobile
                      ? "column"
                      : "row",
                }}
              >
                <button
                  onClick={storeHash}
                  style={{
                    flex: 1,
                    padding:
                      "18px",
                    borderRadius:
                      "16px",
                    border: `1px solid ${V.aBorder}`,
                    background:
                      V.aLight,
                    color:
                      V.accent,
                    fontWeight:
                      "700",
                    fontSize:
                      "16px",
                    cursor:
                      "pointer",
                  }}
                >
                  {loadingStore ? (
                    <Spin />
                  ) : (
                    "Store Hash"
                  )}
                </button>

                <button
                  onClick={
                    verifyHash
                  }
                  style={{
                    flex: 1,
                    padding:
                      "18px",
                    borderRadius:
                      "16px",
                    border: "none",
                    background:
                      "linear-gradient(135deg,#14b8a6 0%,#0f766e 100%)",
                    color:
                      "white",
                    fontWeight:
                      "800",
                    fontSize:
                      "16px",
                    cursor:
                      "pointer",
                    boxShadow:
                      "0 6px 24px rgba(20,184,166,0.35)",
                  }}
                >
                  {loadingVerify ? (
                    <Spin />
                  ) : (
                    "Verify Deployment"
                  )}
                </button>
              </div>

              {/* RESULT */}
              {result && (
                <div
                  style={{
                    marginTop:
                      "28px",
                    borderRadius:
                      "20px",
                    padding:
                      "24px",
                    background:
                      result.status ===
                      "SAFE"
                        ? "rgba(52,211,153,0.12)"
                        : "rgba(248,113,113,0.12)",
                    border:
                      result.status ===
                      "SAFE"
                        ? "1px solid rgba(52,211,153,0.3)"
                        : "1px solid rgba(248,113,113,0.3)",
                  }}
                >
                  <h2
                    style={{
                      color:
                        result.status ===
                        "SAFE"
                          ? V.safe
                          : V.danger,
                    }}
                  >
                    {
                      result.status
                    }
                  </h2>

                  <p>
                    <strong>
                      Trust Score:
                    </strong>{" "}
                    {
                      result.trustScore
                    }
                  </p>

                  <p>
                    <strong>
                      Risk Level:
                    </strong>{" "}
                    {
                      result.riskLevel
                    }
                  </p>

                  <p>
                    <strong>
                      Explanation:
                    </strong>{" "}
                    {
                      result.explanation
                    }
                  </p>

                  <p>
                    <strong>
                      Recommendations:
                    </strong>{" "}
                    {
                      result.recommendations
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* STATS */}
        <div
          style={{
            width: "100%",
            marginTop: "70px",
            display: "grid",
            gridTemplateColumns:
              isMobile
                ? "1fr 1fr"
                : "repeat(4,1fr)",
            gap: "22px",
          }}
        >
          <StatCard
            icon={
              <Icon
                d={D.lock}
                size={28}
              />
            }
            title="99.9%"
            sub="Deployment Integrity"
          />

          <StatCard
            icon={
              <Icon
                d={D.fp}
                size={28}
              />
            }
            title="SHA256"
            sub="Hash Verification"
          />

          <StatCard
            icon={
              <Icon
                d={D.check}
                size={28}
              />
            }
            title="AI"
            sub="Threat Analysis"
          />

          <StatCard
            icon={
              <Icon
                d={D.shield}
                size={28}
              />
            }
            title="24/7"
            sub="Tamper Detection"
          />
        </div>

        {/* FOOTER */}
        <div
          style={{
            textAlign: "center",
            padding:
              "60px 20px 20px",
            color:
              "rgba(255,255,255,0.3)",
            fontSize: "15px",
          }}
        >
          Built for Hackathon 2026 •
          TrustDeploy AI Team
        </div>
      </div>
    </div>
  );
}