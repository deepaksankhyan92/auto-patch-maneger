import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

interface PatchOnboardingFormData {
    cloud: string;
    location: string;
    resourceName: string;
    operatingSystem: string;
    patchSchedule: {
        startTime: string;
        endTime: string;
        recurring: boolean;
        recurrencePattern: {
            frequency: 'weekly' | 'monthly' | 'quarterly' | 'yearly';
            days: string[];
            startDate: string;
            endDate: string | null;
            noEndDate: boolean;
            occurrences: number;
            duration: string;
            time: {
                start: string;
                end: string;
            };
        };
    };
    approvalRequired: {
        patching: boolean;
        reboot: boolean;
    };
    implementationGroup: string;
    changeRequestType: string;
    service: string;
    changeOwner: string;
    assignmentGroup: string;
}

const PatchOnboardingTwoForm: React.FC = () => {
    const [formData, setFormData] = useState<PatchOnboardingFormData>({
        cloud: '',
        location: '',
        resourceName: '',
        operatingSystem: '',
        patchSchedule: {
            startTime: '',
            endTime: '',
            recurring: false,
            recurrencePattern: {
                frequency: 'weekly',
                days: ['Thursday'],
                startDate: '2023-07-17',
                endDate: '2023-07-17',
                noEndDate: false,
                occurrences: 25,
                duration: '2 hours',
                time: {
                    start: '01:30 AM',
                    end: '03:30 AM'
                }
            }
        },
        approvalRequired: {
            patching: true,
            reboot: true
        },
        implementationGroup: '',
        changeRequestType: '',
        service: '',
        changeOwner: '',
        assignmentGroup: ''
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleDaySelection = (day: string) => {
        setFormData(prev => {
            const currentDays = prev.patchSchedule.recurrencePattern.days;
            const newDays = currentDays.includes(day)
                ? currentDays.filter(d => d !== day)
                : [...currentDays, day];

            return {
                ...prev,
                patchSchedule: {
                    ...prev.patchSchedule,
                    recurrencePattern: {
                        ...prev.patchSchedule.recurrencePattern,
                        days: newDays
                    }
                }
            };
        });
    };

    const calculateDuration = (startTime: string, endTime: string): string => {
        const parseTime = (timeStr: string) => {
            const [time, period] = timeStr.split(' ');
            let [hours, minutes] = time.split(':').map(Number);
            if (period === 'PM' && hours !== 12) hours += 12;
            if (period === 'AM' && hours === 12) hours = 0;
            return hours * 60 + minutes;
        };

        const startMinutes = parseTime(startTime);
        const endMinutes = parseTime(endTime);
        let diffMinutes = endMinutes - startMinutes;
        if (diffMinutes < 0) diffMinutes += 24 * 60; // Handle overnight duration

        const hours = Math.floor(diffMinutes / 60);
        const minutes = diffMinutes % 60;

        if (hours === 0) {
            return `${minutes} minutes`;
        } else if (minutes === 0) {
            return `${hours} hours`;
        } else {
            return `${hours} hours ${minutes} minutes`;
        }
    };

    const handleTimeChange = (type: 'start' | 'end', value: string) => {
        setFormData(prev => {
            const newTime = {
                ...prev.patchSchedule.recurrencePattern.time,
                [type]: value
            };

            const duration = calculateDuration(newTime.start, newTime.end);

            return {
                ...prev,
                patchSchedule: {
                    ...prev.patchSchedule,
                    recurrencePattern: {
                        ...prev.patchSchedule.recurrencePattern,
                        time: newTime,
                        duration
                    }
                }
            };
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const RecurrencePatternSection = () => (
        <Card className="mb-4">
            <Card.Header className="d-flex justify-content-between align-items-center bg-white">
                <h6 className="mb-0">Patch Recurrence</h6>
                <button
                    type="button"
                    className="btn-close"
                    onClick={() => setFormData(prev => ({
                        ...prev,
                        patchSchedule: { ...prev.patchSchedule, recurring: false }
                    }))}
                ></button>
            </Card.Header>
            <Card.Body>
                <div className="mb-4">
                    <h6 className="mb-3">Recurrence</h6>
                    <div className="d-flex gap-4 align-items-start">
                        <div>
                            <Form.Label>Start:</Form.Label>
                            <Form.Control
                                type="date"
                                value={formData.patchSchedule.recurrencePattern.startDate}
                                onChange={(e) => setFormData(prev => ({
                                    ...prev,
                                    patchSchedule: {
                                        ...prev.patchSchedule,
                                        recurrencePattern: {
                                            ...prev.patchSchedule.recurrencePattern,
                                            startDate: e.target.value
                                        }
                                    }
                                }))}
                            />
                        </div>
                        <div className="flex-grow-1">
                            <Form.Label>End:</Form.Label>
                            <div>
                                <Form.Check
                                    type="radio"
                                    name="endType"
                                    label={
                                        <div className="d-flex align-items-center gap-2">
                                            <span>End:</span>
                                            <Form.Control
                                                type="date"
                                                value={formData.patchSchedule.recurrencePattern.endDate || ''}
                                                disabled={formData.patchSchedule.recurrencePattern.noEndDate}
                                                onChange={(e) => setFormData(prev => ({
                                                    ...prev,
                                                    patchSchedule: {
                                                        ...prev.patchSchedule,
                                                        recurrencePattern: {
                                                            ...prev.patchSchedule.recurrencePattern,
                                                            endDate: e.target.value,
                                                            noEndDate: false
                                                        }
                                                    }
                                                }))}
                                            />
                                        </div>
                                    }
                                    checked={!formData.patchSchedule.recurrencePattern.noEndDate}
                                    onChange={() => setFormData(prev => ({
                                        ...prev,
                                        patchSchedule: {
                                            ...prev.patchSchedule,
                                            recurrencePattern: {
                                                ...prev.patchSchedule.recurrencePattern,
                                                noEndDate: false
                                            }
                                        }
                                    }))}
                                />
                                <Form.Check
                                    type="radio"
                                    name="endType"
                                    label={
                                        <div className="d-flex align-items-center gap-2">
                                            <span>End after:</span>
                                            <Form.Control
                                                type="number"
                                                style={{ width: '70px' }}
                                                value={formData.patchSchedule.recurrencePattern.occurrences}
                                                onChange={(e) => setFormData(prev => ({
                                                    ...prev,
                                                    patchSchedule: {
                                                        ...prev.patchSchedule,
                                                        recurrencePattern: {
                                                            ...prev.patchSchedule.recurrencePattern,
                                                            occurrences: parseInt(e.target.value)
                                                        }
                                                    }
                                                }))}
                                            />
                                            <span>Occurrences</span>
                                        </div>
                                    }
                                    checked={false}
                                />
                                <Form.Check
                                    type="radio"
                                    name="endType"
                                    label="No end date"
                                    checked={formData.patchSchedule.recurrencePattern.noEndDate}
                                    onChange={() => setFormData(prev => ({
                                        ...prev,
                                        patchSchedule: {
                                            ...prev.patchSchedule,
                                            recurrencePattern: {
                                                ...prev.patchSchedule.recurrencePattern,
                                                noEndDate: true,
                                                endDate: null
                                            }
                                        }
                                    }))}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <h6 className="mb-3">Time</h6>
                    <Row>
                        <Col md={4}>
                            <Form.Label>Start:</Form.Label>
                            <Form.Select
                                value={formData.patchSchedule.recurrencePattern.time.start}
                                onChange={(e) => handleTimeChange('start', e.target.value)}
                            >
                                {Array.from({ length: 48 }).map((_, i) => {
                                    const hour = Math.floor(i / 2);
                                    const minute = i % 2 === 0 ? '00' : '30';
                                    const ampm = hour < 12 ? 'AM' : 'PM';
                                    const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
                                    return (
                                        <option key={i} value={`${hour12.toString().padStart(2, '0')}:${minute} ${ampm}`}>
                                            {`${hour12.toString().padStart(2, '0')}:${minute} ${ampm}`}
                                        </option>
                                    );
                                })}
                            </Form.Select>
                        </Col>
                        <Col md={4}>
                            <Form.Label>End:</Form.Label>
                            <Form.Select
                                value={formData.patchSchedule.recurrencePattern.time.end}
                                onChange={(e) => handleTimeChange('end', e.target.value)}
                            >
                                {Array.from({ length: 48 }).map((_, i) => {
                                    const hour = Math.floor(i / 2);
                                    const minute = i % 2 === 0 ? '00' : '30';
                                    const ampm = hour < 12 ? 'AM' : 'PM';
                                    const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
                                    return (
                                        <option key={i} value={`${hour12.toString().padStart(2, '0')}:${minute} ${ampm}`}>
                                            {`${hour12.toString().padStart(2, '0')}:${minute} ${ampm}`}
                                        </option>
                                    );
                                })}
                            </Form.Select>
                        </Col>
                        <Col md={4}>
                            <Form.Label>Duration:</Form.Label>
                            <Form.Control
                                type="text"
                                value={formData.patchSchedule.recurrencePattern.duration}
                                readOnly
                                disabled
                            />
                        </Col>
                    </Row>
                </div>

                <div>
                    <h6 className="mb-3">Pattern</h6>
                    <div className="d-flex flex-column gap-2 mb-3">
                        <Form.Check
                            type="radio"
                            name="frequency"
                            label="Weekly"
                            checked={formData.patchSchedule.recurrencePattern.frequency === 'weekly'}
                            onChange={() => setFormData(prev => ({
                                ...prev,
                                patchSchedule: {
                                    ...prev.patchSchedule,
                                    recurrencePattern: {
                                        ...prev.patchSchedule.recurrencePattern,
                                        frequency: 'weekly'
                                    }
                                }
                            }))}
                        />
                        <Form.Check
                            type="radio"
                            name="frequency"
                            label="Monthly"
                            checked={formData.patchSchedule.recurrencePattern.frequency === 'monthly'}
                            onChange={() => setFormData(prev => ({
                                ...prev,
                                patchSchedule: {
                                    ...prev.patchSchedule,
                                    recurrencePattern: {
                                        ...prev.patchSchedule.recurrencePattern,
                                        frequency: 'monthly'
                                    }
                                }
                            }))}
                        />
                        <Form.Check
                            type="radio"
                            name="frequency"
                            label="Quarterly"
                            checked={formData.patchSchedule.recurrencePattern.frequency === 'quarterly'}
                            onChange={() => setFormData(prev => ({
                                ...prev,
                                patchSchedule: {
                                    ...prev.patchSchedule,
                                    recurrencePattern: {
                                        ...prev.patchSchedule.recurrencePattern,
                                        frequency: 'quarterly'
                                    }
                                }
                            }))}
                        />
                        <Form.Check
                            type="radio"
                            name="frequency"
                            label="Yearly"
                            checked={formData.patchSchedule.recurrencePattern.frequency === 'yearly'}
                            onChange={() => setFormData(prev => ({
                                ...prev,
                                patchSchedule: {
                                    ...prev.patchSchedule,
                                    recurrencePattern: {
                                        ...prev.patchSchedule.recurrencePattern,
                                        frequency: 'yearly'
                                    }
                                }
                            }))}
                        />
                    </div>

                    {formData.patchSchedule.recurrencePattern.frequency === 'weekly' && (
                        <div>
                            <div className="d-flex align-items-center gap-2 mb-2">
                                <span>Recur every</span>
                                <Form.Control
                                    type="number"
                                    style={{ width: '60px' }}
                                    value={1}
                                    onChange={() => { }} // Add empty onChange handler to prevent warning
                                    min={1}
                                    max={52}
                                />
                                <span>week(s) on:</span>
                            </div>
                            <div className="d-flex flex-wrap gap-3">
                                {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                                    <Form.Check
                                        key={day}
                                        type="checkbox"
                                        label={day}
                                        checked={formData.patchSchedule.recurrencePattern.days.includes(day)}
                                        onChange={() => handleDaySelection(day)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    );

    return (
        <Container className="py-4">
            <h5 className="mb-4">Patching</h5>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-4">
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Cloud <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Select
                                name="cloud"
                                value={formData.cloud}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select Cloud</option>
                                <option value="AWS">AWS</option>
                                <option value="Azure">Azure</option>
                                <option value="GCP">GCP</option>
                            </Form.Select>
                            <Form.Text className="text-muted">
                                Location in which this resource must be created
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Location <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Select
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select Location</option>
                                <option value="eastus">eastus</option>
                                <option value="westus">westus</option>
                            </Form.Select>
                            <Form.Text className="text-muted">
                                Location in which this resource must be created
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Resource Name <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="resourceName"
                                value={formData.resourceName}
                                onChange={handleInputChange}
                                placeholder="Test Server"
                                required
                            />
                            <Form.Text className="text-muted">
                                Resource name must be globally unique and must not contain spaces or uppercase letters
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Operating System <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Select
                                name="operatingSystem"
                                value={formData.operatingSystem}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select Operating System</option>
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

                <Form.Check
                    type="checkbox"
                    label="Recurring"
                    className="mb-3"
                    checked={formData.patchSchedule.recurring}
                    onChange={(e) => setFormData(prev => ({
                        ...prev,
                        patchSchedule: { ...prev.patchSchedule, recurring: e.target.checked }
                    }))}
                />

                {formData.patchSchedule.recurring && <RecurrencePatternSection />}

                <Row className="mb-4">
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>
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
                            <Form.Label>
                                Implementation Group <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Select
                                name="implementationGroup"
                                value={formData.implementationGroup}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select Implementation Group</option>
                                <option value="windows-web-server-2">Windows Web Server - II</option>
                                <option value="linux-web-server">Linux Web Server</option>
                            </Form.Select>
                            <Form.Text className="text-muted">
                                Lorem ipsum dolor sit amet
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>

                <div className="border rounded p-4 mb-4">
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>
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
                                <Form.Label>
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
                                <Form.Label>Change Owner</Form.Label>
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
                                <Form.Label>Assignment Group</Form.Label>
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

export default PatchOnboardingTwoForm;