import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FormData } from '../types/types';

const ImplementationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    implementationGroup: '',
    description: '',
    applicationName: '',
    environment: '',
    servers: [{ name: '' }],
    patchSchedule: {
      startTime: '',
      endTime: '',
      recurring: false,
    },
    approvalRequired: {
      patching: false,
      reboot: false,
    },
    manualTrigger: {
      patching: false,
      reboot: false,
    },
    changeRequestType: '',
    changeOwner: '',
    service: '',
    assignmentGroup: '',
    changeRequestRequired: false,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServerChange = (index: number, value: string): void => {
    const updatedServers = [...formData.servers];
    updatedServers[index] = { name: value };
    setFormData((prev) => ({
      ...prev,
      servers: updatedServers,
    }));
  };

  const addServer = (): void => {
    setFormData((prev) => ({
      ...prev,
      servers: [...prev.servers, { name: '' }],
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Container className="py-4">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-4">
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="text-primary">
                Implementation Group <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="implementationGroup"
                value={formData.implementationGroup}
                onChange={handleInputChange}
                placeholder="Windows Web Server - II"
                required
              />
              <Form.Text className="text-muted">
                Lorem ipsum dolor sit amet
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="text-primary">
                Description <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="OS Patch"
                required
              />
              <Form.Text className="text-muted">
                Lorem ipsum dolor sit amet
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="text-primary">
                Application Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="applicationName"
                value={formData.applicationName}
                onChange={handleInputChange}
                placeholder="Test Server"
                required
              />
              <Form.Text className="text-muted">
                Application name should be globally unique and must not contain spaces or uppercase letters
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="text-primary">
                Environment <span className="text-danger">*</span>
              </Form.Label>
              <Form.Select
                name="environment"
                value={formData.environment}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Environment</option>
                <option value="rhel7.9">Red Hat Enterprise Linux 7.9</option>
                <option value="rhel8">Red Hat Enterprise Linux 8</option>
                <option value="windows">Windows Server</option>
              </Form.Select>
              <Form.Text className="text-muted">
                Lorem ipsum dolor sit amet
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="text-primary">
                Patch Schedule <span className="text-danger">*</span>
              </Form.Label>
              <div className="d-flex gap-3 align-items-center mb-2">
                <div>
                  <Form.Label>Start Time</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="startTime"
                    value={formData.patchSchedule.startTime}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      patchSchedule: { ...prev.patchSchedule, startTime: e.target.value }
                    }))}
                    required
                  />
                </div>
                <div>
                  <Form.Label>End Time</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="endTime"
                    value={formData.patchSchedule.endTime}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      patchSchedule: { ...prev.patchSchedule, endTime: e.target.value }
                    }))}
                    required
                  />
                </div>
              </div>
              <Form.Check
                type="checkbox"
                label="Recurring"
                checked={formData.patchSchedule.recurring}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  patchSchedule: { ...prev.patchSchedule, recurring: e.target.checked }
                }))}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="text-primary">
                Servers <span className="text-danger">*</span>
              </Form.Label>
              {formData.servers.map((server, index) => (
                <Form.Control
                  key={index}
                  type="text"
                  value={server.name}
                  onChange={(e) => handleServerChange(index, e.target.value)}
                  placeholder={`Server ${index + 1}`}
                  className="mb-2"
                  required
                />
              ))}
              <Button variant="outline-primary" size="sm" onClick={addServer}>
                + Add Server
              </Button>
              <Form.Text className="text-muted d-block">
                Lorem ipsum dolor sit amet
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="text-primary">
                Approval Required <span className="text-danger">*</span>
              </Form.Label>
              <div className="d-flex gap-4">
                <div>
                  <Form.Label>Patching</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      label="Yes"
                      name="patchingApproval"
                      checked={formData.approvalRequired.patching}
                      onChange={() => setFormData(prev => ({
                        ...prev,
                        approvalRequired: { ...prev.approvalRequired, patching: true }
                      }))}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="No"
                      name="patchingApproval"
                      checked={!formData.approvalRequired.patching}
                      onChange={() => setFormData(prev => ({
                        ...prev,
                        approvalRequired: { ...prev.approvalRequired, patching: false }
                      }))}
                    />
                  </div>
                </div>
                <div>
                  <Form.Label>Reboot</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      label="Yes"
                      name="rebootApproval"
                      checked={formData.approvalRequired.reboot}
                      onChange={() => setFormData(prev => ({
                        ...prev,
                        approvalRequired: { ...prev.approvalRequired, reboot: true }
                      }))}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="No"
                      name="rebootApproval"
                      checked={!formData.approvalRequired.reboot}
                      onChange={() => setFormData(prev => ({
                        ...prev,
                        approvalRequired: { ...prev.approvalRequired, reboot: false }
                      }))}
                    />
                  </div>
                </div>
              </div>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="text-primary">
                Change Request Required <span className="text-danger">*</span>
              </Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  label="Yes"
                  name="changeRequestRequired"
                  checked={formData.changeRequestRequired}
                  onChange={() => setFormData(prev => ({
                    ...prev,
                    changeRequestRequired: true
                  }))}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="No"
                  name="changeRequestRequired"
                  checked={!formData.changeRequestRequired}
                  onChange={() => setFormData(prev => ({
                    ...prev,
                    changeRequestRequired: false
                  }))}
                />
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="text-primary">
                Manual Trigger <span className="text-danger">*</span>
              </Form.Label>
              <div className="d-flex gap-4">
                <div>
                  <Form.Label>Patching</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      label="Yes"
                      name="manualPatchingTrigger"
                      checked={formData.manualTrigger.patching}
                      onChange={() => setFormData(prev => ({
                        ...prev,
                        manualTrigger: { ...prev.manualTrigger, patching: true }
                      }))}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="No"
                      name="manualPatchingTrigger"
                      checked={!formData.manualTrigger.patching}
                      onChange={() => setFormData(prev => ({
                        ...prev,
                        manualTrigger: { ...prev.manualTrigger, patching: false }
                      }))}
                    />
                  </div>
                </div>
                <div>
                  <Form.Label>Reboot</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      label="Yes"
                      name="manualRebootTrigger"
                      checked={formData.manualTrigger.reboot}
                      onChange={() => setFormData(prev => ({
                        ...prev,
                        manualTrigger: { ...prev.manualTrigger, reboot: true }
                      }))}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="No"
                      name="manualRebootTrigger"
                      checked={!formData.manualTrigger.reboot}
                      onChange={() => setFormData(prev => ({
                        ...prev,
                        manualTrigger: { ...prev.manualTrigger, reboot: false }
                      }))}
                    />
                  </div>
                </div>
              </div>
            </Form.Group>
          </Col>
        </Row>

        <div className="border rounded p-4 mb-4">
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="text-primary">
                  Change Request Type <span className="text-danger">*</span>
                </Form.Label>
                <Form.Select
                  name="changeRequestType"
                  value={formData.changeRequestType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="standard">Standard Change</option>
                  <option value="emergency">Emergency Change</option>
                </Form.Select>
                <Form.Text className="text-muted">
                  Location in which this resource must be created
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="text-primary">
                  Service <span className="text-danger">*</span>
                </Form.Label>
                <Form.Select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="standard">Standard Change</option>
                  <option value="premium">Premium Change</option>
                </Form.Select>
                <Form.Text className="text-muted">
                  Location in which this resource must be created
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="text-primary">Change Owner</Form.Label>
                <Form.Control
                  type="text"
                  name="changeOwner"
                  value={formData.changeOwner}
                  onChange={handleInputChange}
                  placeholder="Steve Rogers"
                />
                <Form.Text className="text-muted">
                  Lorem ipsum dolor sit amet
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="text-primary">Assignment Group</Form.Label>
                <Form.Select
                  name="assignmentGroup"
                  value={formData.assignmentGroup}
                  onChange={handleInputChange}
                >
                  <option value="">Select Group</option>
                  <option value="security">Security Patch</option>
                  <option value="maintenance">Maintenance</option>
                </Form.Select>
                <Form.Text className="text-muted">
                  Lorem ipsum dolor sit amet
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
        </div>

        <div className="d-flex justify-content-center gap-3">
          <Button variant="outline-danger" type="button">
            Cancel
          </Button>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default ImplementationForm;