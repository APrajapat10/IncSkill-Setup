import React from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CFormCheck,
  CFormSelect,
} from "@coreui/react";
const mentorship = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <p className="h2">Mentorship</p>
        </CCardHeader>
        <CCardBody>
          <p>
            Complete this form to sign up for a meeting with a mentor in the
            next two weeks, or as a mentor to share your knowledge, experience
            and skills with a mentee. Each meeting is typically 45 Mins. long.
            If you are a mentee, you can sign up for a match every other week.
            If you are a mentor, you only need to submit this once, and may
            update your response or pause mentorship temporarily using this
            page.
          </p>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardBody>
          <p className="h6">Are you a person with disability? *</p>
          <CFormCheck
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            label="Yes"
          />
          <CFormCheck
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            label="No"
            defaultChecked
          />
          <CFormCheck
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            label="Donot wish to disclose"
            defaultChecked
          />
        </CCardBody>
        <CCardBody>
          <p className="h6">Gender *</p>
          <CFormCheck
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            label="Male"
          />
          <CFormCheck
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            label="Female"
            defaultChecked
          />
          <CFormCheck
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            label="Other"
            defaultChecked
          />
          <CFormCheck
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            label="Donot wish to disclose"
            defaultChecked
          />
        </CCardBody>
        <CCardHeader>
          <p className="h6">Location *</p>
        </CCardHeader>
        <CCardBody>
          <CFormSelect aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </CFormSelect>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>Inline text elements</CCardHeader>
        <CCardBody>
          <p>
            Traditional heading elements are designed to work best in the meat
            of your page content. When you need a heading to stand out, consider
            using a <strong>display heading</strong>
            —a larger, slightly more opinionated heading style.
          </p>
          <div className="bd-example">
            <p>
              You can use the mark tag to <mark>highlight</mark> text.
            </p>
            <p>
              <del>
                This line of text is meant to be treated as deleted text.
              </del>
            </p>
            <p>
              <s>
                This line of text is meant to be treated as no longer accurate.
              </s>
            </p>
            <p>
              <ins>
                This line of text is meant to be treated as an addition to the
                document.
              </ins>
            </p>
            <p>
              <u>This line of text will render as underlined</u>
            </p>
            <p>
              <small>
                This line of text is meant to be treated as fine print.
              </small>
            </p>
            <p>
              <strong>This line rendered as bold text.</strong>
            </p>
            <p>
              <em>This line rendered as italicized text.</em>
            </p>
          </div>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>Description list alignment</CCardHeader>
        <CCardBody>
          <p>
            Align terms and descriptions horizontally by using our grid system’s
            predefined classes (or semantic mixins). For longer terms, you can
            optionally add a{" "}
            <code className="highlighter-rouge">.text-truncate</code> class to
            truncate the text with an ellipsis.
          </p>
          <div className="bd-example">
            <dl className="row">
              <dt className="col-sm-3">Description lists</dt>
              <dd className="col-sm-9">
                A description list is perfect for defining terms.
              </dd>

              <dt className="col-sm-3">Euismod</dt>
              <dd className="col-sm-9">
                <p>
                  Vestibulum id ligula porta felis euismod semper eget lacinia
                  odio sem nec elit.
                </p>
                <p>Donec id elit non mi porta gravida at eget metus.</p>
              </dd>

              <dt className="col-sm-3">Malesuada porta</dt>
              <dd className="col-sm-9">
                Etiam porta sem malesuada magna mollis euismod.
              </dd>

              <dt className="col-sm-3 text-truncate">
                Truncated term is truncated
              </dt>
              <dd className="col-sm-9">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </dd>

              <dt className="col-sm-3">Nesting</dt>
              <dd className="col-sm-9">
                <dl className="row">
                  <dt className="col-sm-4">Nested definition list</dt>
                  <dd className="col-sm-8">
                    Aenean posuere, tortor sed cursus feugiat, nunc augue
                    blandit nunc.
                  </dd>
                </dl>
              </dd>
            </dl>
          </div>
        </CCardBody>
      </CCard>
    </>
  );
};

export default mentorship;
